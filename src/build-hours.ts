import { Field } from "payload/types";

export const buildHoursField: Field[] = [
  {
    name: "monday",
    type: "group",
    label: "Lundi",
    fields: [
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
