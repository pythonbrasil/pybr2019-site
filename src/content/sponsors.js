const Entity = (name, photo, link) => ({
    name, link,
    photo: `/assets/images/entities/${photo}`
});

module.exports = {
    sponsors: [
        {
            title: 'Patrocinadores',
            type: 'prata',
            items: [
                Entity('Evolux', 'evolux.png', '')
            ],
        }
    ],
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
