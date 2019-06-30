const Entity = (name, photo, link) => ({
    name, link,
    photo: `/assets/images/entities/${photo}`
});

module.exports = {
    sponsors: {
        title: 'Patrocinadores',
        categories: [
            {
                type: 'ouro',
                items: [
                    Entity('olist', 'olist.png', 'https://olist.com')
                ],
            },
            {
                type: 'prata',
                items: [
                    Entity('Evolux', 'evolux.png', 'https://www.evolux.net.br')
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
