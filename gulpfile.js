const gulpStatic = require('gulp-static-gen');
const fs = require('fs');
const path = require('path');
const set = require('lodash.set');

const { Converter } = require('showdown');



const data = {};

const loadData = (folderPath, objectPaths = []) => {
    const finalPath = path.resolve(__dirname, folderPath)
    const files = fs.readdirSync(finalPath);

    files.forEach((file) => {
        if (file.indexOf('.') === -1) {
            loadData(`${folderPath}/${file}`, [file]);
            return;
        }

        if (file.indexOf('.js') !== -1) {
            let paths = [...objectPaths, file.replace('.js', '')]
            set(data, paths, require(`${process.cwd()}/${folderPath}/${file}`));
        } else {
            const conv = new Converter({metadata: true});
            let paths = [...objectPaths, file.replace('.md', '')]

            set(data, paths, {
                html: conv.makeHtml(fs.readFileSync(
                    path.resolve(finalPath, file), 'utf-8'
                )),
                meta: conv.getMetadata(),
            });
        }

    });
}

loadData('src/content')

gulpStatic({
    css: {
        input: './src/sass/index.sass',
        output: './dist/assets/css',
        watch: './src/sass/**/*',
    },
    hbs: {
        batch : ['./src/templates/partials'],
        watch : './src/templates/**/*',
        multiple: [
            {
                data: data,
                input: './src/templates/index.hbs',
                output: {
                    dir: './dist',
                    name: 'index.html',
                }
            }
        ]
    },
    img: {
        input: './src/images/**/*',
        output: './dist/assets/images',
        config: {
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [{removeViewBox: true}]
        }
    },
    scripts: {
        input: './src/scripts/index.js',
        output: './dist/assets/scripts/',
        watch: './src/scripts/**/*',
    }
});