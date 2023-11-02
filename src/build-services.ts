import { Field } from "payload/types";

export const buildServicesField: Field[] = [
  {
    name: "available",
    label: "Disponible",
    type: "checkbox",
  },
  {
    name: "additional_info",
    label: "Informations complémentaires",
    type: "textarea",
  },
];
