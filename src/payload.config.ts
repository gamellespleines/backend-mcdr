import { mongooseAdapter } from "@payloadcms/db-mongodb";
// import { payloadCloud } from "@payloadcms/plugin-cloud";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import Structures from "./collections/Structures";
import { Media } from "./collections/Media";
import { payloadCloud } from "@payloadcms/plugin-cloud";

export default buildConfig({
  // plugins: [payloadCloud()],
  admin: {
    bundler: webpackBundler(),
  },
  cors: ["http://localhost:3000", "https://moncompagnonderoute.fr"],
  editor: slateEditor({}),
  localization: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  collections: [Users, Structures, Media],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
  plugins: [payloadCloud()],
});
