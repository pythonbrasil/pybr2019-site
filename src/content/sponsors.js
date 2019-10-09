const Entity = (name, photo, link) => ({
    name, link,
    photo: `/assets/images/entities/${photo}`
});

module.exports = {
    sponsors: {
        title: 'Patrocinadores',
        categories: [
            {
                type: 'diamante',
                items: [
                    Entity('GitHub', 'GitHub_Logo.png', 'https://github.com'),
                ],
            },
            {
                type: 'platina',
                items: [
                    Entity('PSF', 'PSF-Logo-Narrow-Shapes.svg', 'https://www.python.org/psf'),
                ],
            },
            {
                type: 'ouro',
                items: [
                    Entity('Loadsmart', 'loadsmart-logo-horizontal.png', 'https://www.loadsmart.com'),
                    Entity('olist', 'olist.png', 'https://olist.com'),
                    Entity('Stoodi', 'stoodi.png', 'https://www.stoodi.com.br/'),
                    Entity('Globo.com', 'logo_globo_com.svg', 'https://www.globo.com/'),
                ],
            },
            {
                type: 'prata',
                items: [
                    Entity('Evolux', 'logo-evolux.svg', 'https://www.evolux.net.br'),
                    Entity('Lab Codes', 'labcodes.png', 'https://labcodes.com.br/'),
                ],
            },
            {
                type: 'bronze',
                items: [
                    Entity('iDtrust', 'logo-idtrust.png', 'https://www.idtrust.com.br'),
                ],
            },
        ]
    },
    partners: [
      {
        title: 'Parceiros',
        items: [
          Entity('associação python brasil', 'apyb.png', 'https://python.org.br/'),
          Entity('USP', 'usp.png', 'https://www5.usp.br/'),
          Entity('Estácio de Sá', 'estacio.png', 'http://portal.estacio.br')
        ]
      }
    ],
    organization: [
        Entity('FizzFuzz', 'placeholder.png', '/sponsor-test'),
    ]
}
