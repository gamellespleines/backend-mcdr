import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: ({ req }) => true,
    update: ({ req }) => req.user.admin,
    create: ({ req }) => req.user.admin,
    delete: ({ req }) => req.user.admin,
  },
  fields: [
    {
      name: "admin",
      type: "checkbox",
      label: "Is admin ?",
      defaultValue: false,
      access: {
        update: ({ req }) => req.user.admin,
      },
    },
  ],
};

export default Users;
