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
    ],
  },
];
