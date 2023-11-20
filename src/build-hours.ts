import { Field } from "payload/types";

export const buildHoursField: Field[] = [
  {
    name: "monday",
    type: "group",
    label: "Lundi",
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "start_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "start_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
        ],
      },
      {
        name: "start_hour_am",
        type: "text",
        label: "Heure d'ouverture (matin)",
      },
      {
        name: "end_hour_am",
        type: "text",
        label: "Heure de fermeture (matin)",
      },
      {
        name: "start_hour_pm",
        type: "text",
        label: "Heure d'ouverture (après-midi)",
      },
      {
        name: "end_hour_pm",
        type: "text",
        label: "Heure de fermeture (après-midi)",
      },
    ],
  },
  {
    name: "tuesday",
    type: "group",
    label: "Mardi",
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "start_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "start_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
        ],
      },
      {
        name: "start_hour_am",
        type: "text",
        label: "Heure d'ouverture (matin)",
      },
      {
        name: "end_hour_am",
        type: "text",
        label: "Heure de fermeture (matin)",
      },
      {
        name: "start_hour_pm",
        type: "text",
        label: "Heure d'ouverture (après-midi)",
      },
      {
        name: "end_hour_pm",
        type: "text",
        label: "Heure de fermeture (après-midi)",
      },
    ],
  },
  {
    name: "wednesday",
    type: "group",
    label: "Mercredi",
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "start_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "start_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
        ],
      },
      {
        name: "start_hour_am",
        type: "text",
        label: "Heure d'ouverture (matin)",
      },
      {
        name: "end_hour_am",
        type: "text",
        label: "Heure de fermeture (matin)",
      },
      {
        name: "start_hour_pm",
        type: "text",
        label: "Heure d'ouverture (après-midi)",
      },
      {
        name: "end_hour_pm",
        type: "text",
        label: "Heure de fermeture (après-midi)",
      },
    ],
  },
  {
    name: "thursday",
    type: "group",
    label: "Jeudi",
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "start_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "start_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
        ],
      },
      {
        name: "start_hour_am",
        type: "text",
        label: "Heure d'ouverture (matin)",
      },
      {
        name: "end_hour_am",
        type: "text",
        label: "Heure de fermeture (matin)",
      },
      {
        name: "start_hour_pm",
        type: "text",
        label: "Heure d'ouverture (après-midi)",
      },
      {
        name: "end_hour_pm",
        type: "text",
        label: "Heure de fermeture (après-midi)",
      },
    ],
  },
  {
    name: "friday",
    type: "group",
    label: "Vendredi",
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "start_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "start_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
        ],
      },
      {
        name: "start_hour_am",
        type: "text",
        label: "Heure d'ouverture (matin)",
      },
      {
        name: "end_hour_am",
        type: "text",
        label: "Heure de fermeture (matin)",
      },
      {
        name: "start_hour_pm",
        type: "text",
        label: "Heure d'ouverture (après-midi)",
      },
      {
        name: "end_hour_pm",
        type: "text",
        label: "Heure de fermeture (après-midi)",
      },
    ],
  },
  {
    name: "saturday",
    type: "group",
    label: "Samedi",
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "start_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "start_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
        ],
      },
      {
        name: "start_hour_am",
        type: "text",
        label: "Heure d'ouverture (matin)",
      },
      {
        name: "end_hour_am",
        type: "text",
        label: "Heure de fermeture (matin)",
      },
      {
        name: "start_hour_pm",
        type: "text",
        label: "Heure d'ouverture (après-midi)",
      },
      {
        name: "end_hour_pm",
        type: "text",
        label: "Heure de fermeture (après-midi)",
      },
    ],
  },
  {
    name: "sunday",
    type: "group",
    label: "Dimanche",
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "start_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_am",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "start_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
          {
            name: "end_pm",
            localized: true,
            type: "date",
            admin: {
              date: {
                timeFormat: "HH:mm",
                pickerAppearance: "timeOnly",
              },
            },
          },
        ],
      },
      {
        name: "start_hour_am",
        type: "text",
        label: "Heure d'ouverture (matin)",
      },
      {
        name: "end_hour_am",
        type: "text",
        label: "Heure de fermeture (matin)",
      },
      {
        name: "start_hour_pm",
        type: "text",
        label: "Heure d'ouverture (après-midi)",
      },
      {
        name: "end_hour_pm",
        type: "text",
        label: "Heure de fermeture (après-midi)",
      },
    ],
  },
];
