import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: ({ req: { user, collection } }) => {
      if (!user) return false;
      if (collection.config.slug === "users") {
        return user.admin;
      } else {
        return true;
      }
    },
    read: () => true,
    update: ({ req: { user, collection } }) => {
      if (!user) return false;
      if (collection.config.slug === "users") {
        return user.admin;
      } else {
        return true;
      }
    },
    delete: ({ req: { user, collection } }) => {
      if (!user) return false;
      if (collection.config.slug === "users") {
        return user.admin;
      } else {
        return true;
      }
    },
  },
  fields: [
    {
      name: "admin",
      type: "checkbox",
      label: "Is admin ?",
      defaultValue: false,
    },
  ],
};

export default Users;
