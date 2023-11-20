import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import Structures from "./collections/Structures";
import { Media } from "./collections/Media";
import { payloadCloud } from "@payloadcms/plugin-cloud";

export default buildConfig({
  admin: {
    bundler: webpackBundler(),
  },
  cors: ["http://localhost:3000", "https://moncompagnonderoute.fr"],
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
  plugins: [payloadCloud()],
});
