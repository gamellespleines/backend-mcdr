import { CollectionConfig } from "payload/types";
import { buildServicesField } from "../build-services";
import { buildHoursField } from "../build-hours";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Structures: CollectionConfig = {
  slug: "structure",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Nom de la structure",
    },
    {
      name: "structure_type",
      type: "select",
      label: "Type de structure",
      hasMany: true,
      options: [
        {
          label:
            "CSAPA - Centre de Soins, d’Accompagnement et de Prévention en Addictologie",
          value: "csapa",
        },
        {
          label:
            "Centre d’Accueil et d’Accompagnement à la Réduction des risques pour Usagers de Drogues",
          value: "caarud",
        },
        { label: "Centre Hospitalier Spécialisé", value: "chs" },
        { label: "Centre d'Hébergement d'Urgence", value: "chu" },
        {
          label: "Centre d'Hébergement et Réinsertion Sociale",
          value: "chrs",
        },
        { label: "Centre Communal d'Action Sociale", value: "ccas" },
        { label: "Association / Maraude", value: "am" },
        { label: "Autres Hébergement", value: "ah" },
        { label: "Autres", value: "other" },
      ],
    },
    {
      name: "day_night_care",
      label: "Accueil",
      type: "select",
      options: [
        { label: "Accueil 24h/24", value: "day_night_care" },
        { label: "Accueil de jour", value: "day_care" },
        { label: "Accueil de nuit", value: "night_care" },
      ],
    },
    {
      label: "Jours d'ouverture",
      type: "collapsible",
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          label: "Définissez les créneaux d'ouverture",
          name: "opening_days",
          type: "group",
          fields: buildHoursField,
        },
      ],
    },
    {
      name: "description",
      label: "Description",
      type: "text",
    },
    {
      name: "contact_phone",
      label: "Téléphone",
      type: "text",
    },
    {
      name: "contact_email",
      label: "Email",
      type: "text",
    },
    {
      name: "website",
      label: "Site web",
      type: "text",
    },
    {
      name: "address",
      label: "Adresse",
      type: "text",
    },
    {
      name: "city",
      label: "Ville",
      type: "text",
    },
    {
      name: "country",
      label: "Pays",
      type: "text",
    },
    {
      name: "postal_code",
      label: "Code postal",
      type: "text",
    },
    {
      name: "location",
      type: "point",
      label: "Location",
    },
    {
      name: "additional_info",
      label: "Informations complémentaires",
      type: "textarea",
    },
    {
      name: "capacity_pets",
      label: "Capacité d'accueil des animaux",
      type: "number",
    },
    {
      name: "capacity_humans",
      label: "Capacité d'accueil des humains",
      type: "number",
    },
    {
      name: "people_access_conditions",
      type: "group",
      label: "Conditions d'accueil des personnes",
      fields: [
        {
          name: "conditions",
          label: "Conditions d'accès",
          type: "select",
          hasMany: true,
          options: [
            {
              label:
                "Adapté au personnes atteintes de problèmes psychologiques",
              value: "adapted_when_psychological_problems",
            },
            {
              label: "Accueil sous conditions de ressources",
              value: "on_means_tested",
            },
            {
              label: "Accueil sur rendez-vous requis",
              value: "by_appointment_only",
            },
            {
              label: "Accès gratuit ou avec contribution libre",
              value: "free_access",
            },
            {
              label: "Participation requise aux frais d'hébergement",
              value: "participation_requested_for_hosting",
            },
            {
              label: "Participation requise aux frais de soins",
              value: "participation_requested_for_care",
            },
            {
              label: "Présence d'enfants possible dans la structure",
              value: "presence_of_children",
            },
            {
              label: "Mineurs non accompagnés acceptés",
              value: "unaccompanied_minors_accepted",
            },
            { label: "Couples acceptés", value: "couples_accepted" },
            {
              label: "Adapté aux personnes à mobilité réduite",
              value: "adapted_for_reduced_mobility",
            },
            {
              label:
                "Centre adapté aux personnes en situation de maladie / infections graves et invalidantes",
              value: "adapted_when_illnesses_and_infections",
            },
            {
              label: "Pièce d'identité obligatoire",
              value: "identity_document_mandatory",
            },
            {
              label: "Preuve de revenu obligatoire",
              value: "proof_of_income_mandatory",
            },
          ],
        },
        {
          name: "referral_needed",
          label: "Accueil sur orientation obligatoire",
          type: "select",
          hasMany: true,
          options: [
            { label: "Pas d'orientation préalable", value: "no" },
            { label: "Sur orientation du 115", value: "115" },
            {
              label:
                "Sur orientation du SIAO - Service intégré d'Accueil et d'Orientation",
              value: "siao",
            },
            {
              label: "Sur orientation du samu social",
              value: "social_samu",
            },
            {
              label: "Sur orientation d'un vétérinaire",
              value: "vet",
            },
          ],
        },
        {
          name: "additional_information",
          label: "Autres conditions d'accès spécifiques",
          type: "textarea",
        },
        {
          name: "max_pets_number_per_person",
          label: "Nombre maximum d'animaux acceptés par personne",
          type: "number",
        },
        {
          label: "Age minimum requis pour accéder à la structure",
          name: "age_restriction_min",
          type: "number",
        },
        {
          label: "Age maximum autorisé pour accéder à la structure",
          name: "age_restriction_max",
          type: "number",
        },
      ],
    },
    {
      name: "pets_access_conditions",
      type: "group",
      label: "Conditions d'accès des animaux",
      fields: [
        {
          name: "conditions",
          label: "Conditions d'accès",
          type: "select",
          hasMany: true,
          options: [
            {
              label: "L'animal doit être stérilisé",
              value: "sterilized_mandatory",
            },
            {
              label: "L'animal est accepté dans les parties communes",
              value: "access_to_common_areas_allowed",
            },
            {
              label: "Laisse courte obligatoire",
              value: "short_leash_mandatory",
            },
            {
              label: "Muselière obligatoire",
              value: "muzzle_mandatory",
            },
            {
              label: "Carnet de santé à jour obligatoire",
              value: "up_to_date_health_record_mandatory",
            },
            {
              label: "L'animal doit rester dans la cour / le jardin",
              value: "must_stay_in_the_yard",
            },
            {
              label: "L'animal doit rester en cage",
              value: "must_remain_in_a_cage",
            },
            {
              label: "L'animal doit être vermifugé",
              value: "dewormed_mandatory",
            },
            {
              label: "L'animal doit être identifié",
              value: "identified_mandatory",
            },
            {
              label: "Les vaccinations doit être à jour",
              value: "up_to_date_vaccinations_mandatory",
            },
            {
              label:
                "L'animal doit être traité contre les puces et les tiques",
              value: "treated_against_fleas_and_ticks_mandatory",
            },
            {
              label: "L'animal peut dormir avec son humain",
              value: "can_sleep_with_human",
            },
            {
              label: "Les chiens de grandes tailles sont acceptés",
              value: "big_dogs_allowed",
            },
            {
              label: "Type de chiens acceptés",
              value: "pet_type_accepted",
            },
            {
              label:
                "Autres conditions d'accès spécifiques pour les animaux",
              value: "additional_information",
            },
          ],
        },
        {
          name: "pet_type_accepted",
          label: "Type d'animaux acceptés",
          type: "select",
          options: [
            { label: "Tous animaux de compagnie", value: "all" },
            { label: "Chiens", value: "dogs" },
            { label: "Chats", value: "cats" },
            {
              label: "Chiens et chats uniquement",
              value: "dogs_and_cats",
            },
          ],
        },
        {
          name: "additional_information",
          label: "Informations complémentaires",
          type: "textarea",
        },
      ],
    },
    {
      name: "human_services",
      label: "Services pour les personnes",
      type: "group",
      fields: [
        {
          label: "Santé",
          type: "collapsible",
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: "health",
              label: "Sélectionnez les services de santé disponibles",
              type: "group",
              fields: [
                {
                  name: "doctor",
                  label: "Médecin",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "nurse",
                  label: "Infirmier(e)",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "psychologist",
                  label: "Psychologue",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "social_services",
                  label: "Services sociaux",
                  type: "group",
                  fields: buildServicesField,
                },
              ],
            },
          ],
        },
        {
          label: "Commodités",
          type: "collapsible",
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: "commodities",
              label: "Sélectionnez les commodités disponibles",
              type: "group",
              fields: [
                {
                  name: "wc",
                  type: "group",
                  label: "Toilettes",
                  fields: buildServicesField,
                },
                {
                  name: "shower",
                  type: "group",
                  label: "Douches",
                  fields: buildServicesField,
                },
                {
                  name: "laveries",
                  type: "group",
                  label: "Laveries",
                  fields: buildServicesField,
                },
                {
                  name: "bagagerie",
                  type: "group",
                  label: "Bagagerie",
                  fields: buildServicesField,
                },
                {
                  name: "loading_battery",
                  type: "group",
                  label: "Rechargement de batterie",
                  fields: buildServicesField,
                },
                {
                  name: "vestiaire",
                  type: "group",
                  label: "Vestiaire",
                  fields: buildServicesField,
                },
              ],
            },
          ],
        },
        {
          type: "collapsible",
          label: "Hébergement",
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: "housing",
              label:
                "Sélectionnez les services d'hébergement disponibles",
              type: "group",
              fields: [
                {
                  name: "solo",
                  label: "Hébergement solo",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "with_pets",
                  label: "Hébergement avec animaux",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "couple",
                  label: "Hébergement en couple",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "family",
                  label: "Hébergement en famille",
                  type: "group",
                  fields: buildServicesField,
                },
              ],
            },
          ],
        },
        {
          label: "Alimentation",
          type: "collapsible",
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: "food",
              label:
                "Sélectionnez les services alimentaires disponibles",
              type: "group",
              fields: [
                {
                  name: "alimentary_help",
                  label: "Aide alimentaire",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "restaurant_snack",
                  label: "Restaurant / Snack",
                  type: "group",
                  fields: buildServicesField,
                },
              ],
            },
          ],
        },
        {
          label: "Autres services",
          type: "collapsible",
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: "other_services",
              label: "Sélectionnez les autres services disponibles",
              type: "group",
              fields: [
                {
                  name: "traineeship",
                  label: "Apprentissage FLE",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "formation",
                  label: "Initiation à un métier",
                  type: "group",
                  fields: buildServicesField,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "pets_services",
      label: "Services pour les animaux",
      type: "group",
      fields: [
        {
          label: "Santé",
          type: "collapsible",
          fields: [
            {
              name: "health",
              label: "Sélectionnez les services de santé disponibles",
              type: "group",
              fields: [
                {
                  name: "vet",
                  label: "¨Présence d'un(e) vétérinaire",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "surgery",
                  label: "Chirurgie",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "dental_care",
                  label: "Soins dentaires",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "parasytic_treatment",
                  label: "Traitement antiparasitaire",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "vaccination",
                  label: "Vaccination",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "food",
                  label: "Nourriture disponible",
                  type: "group",
                  fields: buildServicesField,
                },
              ],
            },
          ],
        },
        {
          type: "collapsible",
          label: "Garde",
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: "keeping",
              label: "Sélectionnez les services de garde disponibles",
              type: "group",
              fields: [
                {
                  name: "foster_family",
                  label: "Famille d'accueil bénévole",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "kennel",
                  label: "Garde en Chenil",
                  type: "group",
                  fields: buildServicesField,
                },
              ],
            },
          ],
        },
        {
          label: "Autres services",
          type: "collapsible",
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: "other_services",
              label: "Sélectionnez les autres services disponibles",
              type: "group",
              fields: [
                {
                  name: "identity",
                  label: "Identification / Puçage",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "behaviour",
                  label: "Aide au comportement animal",
                  type: "group",
                  fields: buildServicesField,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "picture", // required
      type: "array", // required
      label: "Images",
      minRows: 0,
      maxRows: 5,
      labels: {
        singular: "Image",
        plural: "Images",
      },
      fields: [
        {
          name: "image", // required
          type: "upload", // required
          relationTo: "media", // required
          required: true,
        },
        {
          name: "picture_description",
          type: "textarea",
        },
        {
          name: "picture_name",
          type: "text",
        },
      ],
    },
  ],
};

export default Structures;
