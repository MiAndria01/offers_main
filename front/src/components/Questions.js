export const questions = [
    {
      section: 1,
      items: [
        {
          label: 'Point Depart',
          type: 'text',
          value: 'PointDepart'
        },
        {
          label: 'Point Arrivee',
          type: 'text',
          value: 'PointArrivee'
        }
      ]
    },
    {
      section: 2,
      items: [
        {
          label: 'Date Covoiturage',
          type: 'date',
          value: 'DateCovoiturage'
        },
        {
          label: 'Heure Depart',
          type: 'time',
          value: 'HeureDepart'
        },
      ]
    },
    {
      section: 3,
      items: [
        {
          label: 'Type Annonce',
          type: 'text',
          value: 'TypeAnnonce'
        },
        {
            label: 'Nombre Passager',
            type: 'number',
            value: 'NombrePassager'
        }
      ]
    },
    {
        section: 4,
        items: [
            {
                label: 'Tarif (en Ariary)',
                type: 'number',
                value: 'Tarif'
            }
        ]
    }
  ]