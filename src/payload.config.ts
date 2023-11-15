import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import Structures from "./collections/Structures";
import { Media } from "./collections/Media";

export default buildConfig({
  admin: {
    bundler: webpackBundler(),
  },
  serverURL: "https://backend.moncompagnonderoute.fr",
  editor: slateEditor({}),
  localization: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  collections: [Users, Structures, Media],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
});
