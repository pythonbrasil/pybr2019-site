const Entity = (name, photo, link) => ({
    name, link,
    photo: `/assets/images/entities/${photo}`
});

module.exports = {
    sponsors: {
        title: 'Patrocinadores',
        categories: [
            {
                type: 'platina',
                items: [
                    Entity('Python Software Foundation', 'psf.png', 'https://www.python.org')
                ],
            },
            {
                type: 'ouro',
                items: [
                    Entity('Loadsmart', 'loadsmart-logo-horizontal.png', 'https://www.loadsmart.com'),
                    Entity('olist', 'olist.png', 'https://olist.com'),
                    Entity('Stoodi', 'stoodi.png', 'https://www.stoodi.com.br/')
                ],
            },
            {
                type: 'prata',
                items: [
                    Entity('Evolux', 'evolux.png', 'https://www.evolux.net.br'),
                    Entity('Lab Codes', 'labcodes.png', 'https://labcodes.com.br/')
                ],
            }
        ]
    },
    partners: [
      {
        title: 'Parceiros',
        items: [
          Entity('associação python brasil', 'apyb.png', 'https://python.org.br/'),

        ]
      }
    ],
    organization: [
        Entity('FizzFuzz', 'placeholder.png', '/sponsor-test'),
    ]
}
