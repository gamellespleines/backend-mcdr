import { buildHoursField } from "./build-hours";

export const buildServicesField = [
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
    name: "openingHours",
    type: "array",
    maxRows: 7,
    fields: buildHoursField,
  },
];
