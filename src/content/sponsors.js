const Entity = (name, photo, link) => ({
    name, link,
    photo: `/assets/images/entities/${photo}`
});

module.exports = {
    sponsors: [
        {
            title: 'Patrocinadores',
            type: 'platina',
            items: [
                Entity('Foo', 'placeholder.png', '/sponsor-test'),
                Entity('Bar', 'placeholder.png', '/sponsor-test'),
            ],
        },
        {
            type: 'ouro',
            items: [
                Entity('Fizz', 'placeholder.png', '/sponsor-test'),
                Entity('Fuzz', 'placeholder.png', '/sponsor-test'),
            ],
        },
        {
            type: 'prata',
            items: [
                Entity('Zoom', 'placeholder.png', '/sponsor-test'),
                Entity('Zaam', 'placeholder.png', '/sponsor-test'),
            ],
        }
    ],
    partners: [
        Entity('FooBar', 'placeholder.png', '/sponsor-test'),
    ],
    organization: [
        Entity('FizzFuzz', 'placeholder.png', '/sponsor-test'),
    ]
}