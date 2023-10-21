import { CollectionConfig } from "payload/types";
import { buildServicesField } from "../build-services";
import { buildHoursField } from "../build-hours";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Structures: CollectionConfig = {
  slug: "structure",
  admin: {
    useAsTitle: "name",
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
      name: "opening_days",
      label: "Jours d'ouverture",
      type: "array",
      maxRows: 7,
      fields: buildHoursField,
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
      name: "period_date_start",
      type: "date",
    },
    {
      name: "period_date_end",
      type: "date",
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
              label: "adapted_when_psychological_problems",
              value: "adapted_when_psychological_problems",
            },
            { label: "on_application", value: "on_application" },
            { label: "on_means_tested", value: "on_means_tested" },
            {
              label: "by_appointment_only",
              value: "by_appointment_only",
            },
            { label: "free_access", value: "free_access" },
            {
              label: "participation_requested_for_hosting",
              value: "participation_requested_for_hosting",
            },
            {
              label: "participation_requested_for_care",
              value: "participation_requested_for_care",
            },
            {
              label: "presence_of_children",
              value: "presence_of_children",
            },
            {
              label: "unaccompanied_minors_accepted",
              value: "unaccompanied_minors_accepted",
            },
            { label: "couples_accepted", value: "couples_accepted" },
            {
              label: "adapted_for_reduced_mobility",
              value: "adapted_for_reduced_mobility",
            },
            {
              label: "adapted_when_illnesses_and_infections",
              value: "adapted_when_illnesses_and_infections",
            },
            {
              label: "identity_document_mandatory",
              value: "identity_document_mandatory",
            },
            {
              label: "proof_of_income_mandatory",
              value: "proof_of_income_mandatory",
            },
          ],
        },
        {
          name: "referral_needed",
          label: "Orientation préalable",
          type: "select",
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
          label: "Informations complémentaires",
          type: "textarea",
        },
        {
          name: "max_pets_number_per_person",
          label: "Nombre maximum d'animaux par personne",
          type: "number",
        },
        {
          label: "Age minimum",
          name: "age_restriction_min",
          type: "number",
        },
        {
          label: "Age maximum",
          name: "age_restriction_max",
          type: "number",
        },
      ],
    },
    {
      name: "pets_access_conditions",
      type: "group",
      label: "Conditions d'accueil des animaux",
      fields: [
        {
          name: "conditions",
          label: "Conditions d'accès",
          type: "select",
          hasMany: true,
          options: [
            {
              label: "sterilized_mandatory",
              value: "sterilized_mandatory",
            },
            {
              label: "access_to_common_areas_allowed",
              value: "access_to_common_areas_allowed",
            },
            {
              label: "short_leash_mandatory",
              value: "short_leash_mandatory",
            },
            { label: "muzzle_mandatory", value: "muzzle_mandatory" },
            {
              label: "up_to_date_health_record_mandatory",
              value: "up_to_date_health_record_mandatory",
            },
            {
              label: "must_stay_in_the_yard",
              value: "must_stay_in_the_yard",
            },
            {
              label: "must_remain_in_a_cage",
              value: "must_remain_in_a_cage",
            },
            {
              label: "dewormed_mandatory",
              value: "dewormed_mandatory",
            },
            {
              label: "identified_mandatory",
              value: "identified_mandatory",
            },
            {
              label: "up_to_date_vaccinations_mandatory",
              value: "up_to_date_vaccinations_mandatory",
            },
            {
              label: "treated_against_fleas_and_ticks_mandatory",
              value: "treated_against_fleas_and_ticks_mandatory",
            },
            {
              label: "can_sleep_with_human",
              value: "can_sleep_with_human",
            },
            { label: "big_dogs_allowed", value: "big_dogs_allowed" },
            {
              label: "pet_type_accepted",
              value: "pet_type_accepted",
            },
            {
              label: "additional_information",
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
      type: "array",
      maxRows: 5,
      fields: [
        {
          name: "Health",
          type: "array",
          maxRows: 1,
          fields: [
            {
              name: "Doctor",
              label: "Médecin",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
            {
              name: "Nurse",
              label: "Infirmier(e)",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
            {
              name: "Psychologist",
              label: "Psychologue",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
            {
              name: "Social_Services",
              label: "Services sociaux",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
          ],
        },
        {
          name: "Commodities",
          type: "array",
          maxRows: 1,
          fields: [
            {
              name: "WC",
              maxRows: 1,
              type: "array",
              label: "Toilettes",
              fields: buildServicesField,
            },
            {
              name: "Douches",
              maxRows: 1,
              type: "array",
              label: "Douches",
              fields: buildServicesField,
            },
            {
              name: "Laveries",
              maxRows: 1,
              type: "array",
              label: "Laveries",
              fields: buildServicesField,
            },
            {
              name: "Bagagerie",
              maxRows: 1,
              type: "array",
              label: "Bagagerie",
              fields: buildServicesField,
            },
            {
              name: "loading_battery",
              maxRows: 1,
              type: "array",
              label: "Rechargement de batterie",
              fields: buildServicesField,
            },
            {
              name: "Vestiaire",
              maxRows: 1,
              type: "array",
              label: "Vestiaire",
              fields: buildServicesField,
            },
          ],
        },
        {
          name: "hosting",
          type: "array",
          maxRows: 1,
          fields: [
            {
              name: "solo",
              label: "Hébergement solo",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
            {
              name: "with_pets",
              label: "Hébergement avec animaux",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
            {
              name: "couple",
              label: "Hébergement en couple",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
            {
              name: "family",
              label: "Hébergement en famille",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
          ],
        },
        {
          name: "Food",
          label: "Alimentation",
          type: "array",
          maxRows: 1,
          fields: [
            {
              name: "alimentary_help",
              label: "Aide alimentaire",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
            {
              name: "restaurant_snack",
              label: "Restaurant / Snack",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
          ],
        },
        {
          name: "other_services",
          label: "Autres services",
          type: "array",
          maxRows: 1,
          fields: [
            {
              name: "traineeship",
              label: "Apprentissage FLE",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
            {
              name: "formation",
              label: "Initiation à un métier",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
          ],
        },
      ],
    },
    {
      name: "pets_services",
      label: "Services pour les animaux",
      type: "array",
      maxRows: 3,
      fields: [
        {
          name: "Health",
          label: "Santé",
          type: "array",
          maxRows: 1,
          fields: [
            {
              name: "vet",
              label: "¨Présence d'un(e) vétérinaire",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
            {
              name: "surgery",
              label: "Chirurgie",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
            {
              name: "dental_care",
              label: "Soins dentaires",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
            {
              name: "parasytic_treatment",
              label: "Traitement antiparasitaire",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
            {
              name: "vaccination",
              label: "Vaccination",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
            {
              name: "food",
              label: "Nourriture disponible",
              type: "array",
              fields: buildServicesField,
              maxRows: 1,
            },
          ],
        },
        {
          name: "keeping",
          type: "array",
          maxRows: 1,
          fields: [
            {
              name: "kennel",
              label: "Garde en chenil",
              type: "array",
              maxRows: 1,
              fields: buildServicesField,
            },
            {
              name: "family",
              label: "Garde par des familles bénévoles",
              type: "array",
              maxRows: 1,
              fields: buildServicesField,
            },
          ],
        },
        {
          name: "other_services",
          label: "Autres services",
          type: "array",
          maxRows: 1,
          fields: [
            {
              name: "identity",
              label: "Identification / Puçage",
              type: "array",
              maxRows: 1,
              fields: buildServicesField,
            },
            {
              name: "behaviour",
              label: "Aide au comportement animal",
              type: "array",
              maxRows: 1,
              fields: buildServicesField,
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
