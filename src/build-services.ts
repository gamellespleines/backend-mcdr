import { Field } from "payload/types";
import { buildHoursField } from "./build-hours";

export const buildServicesField: Field[] = [
  {
    name: "available",
    type: "checkbox",
  },
  {
    name: "additional_info",
    label: "Additional info",
    type: "textarea",
  },
  {
    label: "Jours d'ouverture du service",
    type: "collapsible",
    admin: {
      initCollapsed: true,
    },
    fields: [
      {
        label: "Heure d'ouverture",
        name: "opening_hours",
        type: "group",
        fields: buildHoursField,
      },
    ],
  },
];
