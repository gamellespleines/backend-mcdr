export const buildHoursField = [
  {
    name: "day",
    label: "Jour",
    type: "select",
    options: [
      { label: "Lundi", value: "monday" },
      { label: "Mardi", value: "tuesday" },
      { label: "Mercredi", value: "wednesday" },
      { label: "Jeudi", value: "thursday" },
      { label: "Vendredi", value: "friday" },
      { label: "Samedi", value: "saturday" },
      { label: "Dimanche", value: "sunday" },
    ],
  },
  {
    name: "isOpen",
    type: "checkbox",
  },
  {
    name: "start_hour",
    type: "number",
  },
  {
    name: "end_hour",
    type: "number",
  },
];
