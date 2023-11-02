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
        {
          label: "Etablissement de soins vétérinaires",
          value: "vet",
        },
        { label: "Dispensaire", value: "dispensaire" },
        { label: "Pension", value: "pension" },
        { label: "Accueil de jour", value: "day_care" },
        {
          label: "Epicerie sociale et solidaire",
          value: "solidarity",
        },
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
      label: "Capacité d’accueil de la structure (animaux)",
      type: "number",
    },
    {
      name: "capacity_humans",
      label: "Capacité d’accueil de la structure (humain)",
      type: "number",
    },
    {
      name: "supported_bardot",
      label: "Soutenu par la fondation Brigitte Bardot",
      type: "checkbox",
    },
    {
      name: "supported_gp",
      label: "Soutenu par Gamelles Pleines",
      type: "checkbox",
    },
    {
      name: "people_access_conditions",
      type: "group",
      label: "Conditions d'accueil des personnes",
      fields: [
        {
          name: "adapted_when_psychological_problems",
          label:
            "Adapté au personnes atteintes de problèmes psychologiques",
          type: "checkbox",
        },
        {
          name: "adapted_for_reduce_mobility",
          label: "Adapté aux personnes à mobilité réduite",
          type: "checkbox",
        },
        {
          name: "adapted_when_illness_and_infections",
          label:
            "Centre adapté aux personnes en situation de maladie / infections graves et invalidantes",
          type: "checkbox",
        },
        {
          name: "access_type",
          label: "Prérequis pour venir",
          type: "select",
          hasMany: true,
          options: [
            {
              label: "Accès libre",
              value: "free_access",
            },
            {
              label: "Participation financière demandée",
              value: "financial_participation_required",
            },
            {
              label: "Pièce d'identité obligatoire",
              value: "id_card_mandatory",
            },
            {
              label:
                "Sous condition de ressources (justificatif demandés)",
              value: "income_condition",
            },
            {
              label: "Sur orientation préalable par le 115",
              value: "orientation_required",
            },
            {
              label:
                "Sur orientation préalable par un travailleur social",
              value: "social_worker_orientation_required",
            },
            {
              label: "Sur orientation par un vétérinaire",
              value: "veterinary_orientation_required",
            },
            {
              label: "Sur RDV uniquement",
              value: "appointment_only",
            },
          ],
        },
        {
          name: "additional_specific_condition",
          label: "Autres conditions d'accès spécifiques",
          type: "textarea",
        },
        {
          name: "max_pets_per_person",
          label: "Nombre d'animaux acceptés par personne",
          type: "select",
          options: [
            {
              label: "1",
              value: "1",
            },
            {
              label: "2",
              value: "2",
            },
            {
              label: "3",
              value: "3",
            },
            {
              label: "Sans limite",
              value: "unlimited",
            },
          ],
        },
        {
          name: "public_type",
          label: "Public accepté",
          type: "select",
          hasMany: true,
          options: [
            {
              label: "Personnes majeures",
              value: "adults",
            },
            {
              label: "Personnes mineures",
              value: "minors",
            },
            {
              label: "Hommes seuls",
              value: "men_only",
            },
            {
              label: "Femmes seules",
              value: "women_only",
            },
            {
              label: "Couple sans enfant",
              value: "couple_without_children",
            },
            {
              label: "Famille",
              value: "family",
            },
          ],
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
              label: "Stérilisation obligatoire",
              value: "sterilized_mandatory",
            },
            {
              label: "L’animal est accepté dans les parties communes",
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
              label:
                "L’animal doit rester en extérieur (cour/jardin)",
              value: "must_stay_in_the_yard",
            },
            {
              label: "L'animal doit rester en cage",
              value: "must_remain_in_a_cage",
            },
            {
              label: "Traitement antiparasitaire obligatoire",
              value: "mandatory_pest_control_treatment",
            },
            {
              label: "L'animal doit être identifié",
              value: "identified_mandatory",
            },
            {
              label: "Chiens de catégorie interdit",
              value: "category_dogs_denied",
            },
            {
              label: "L'animal peut dormir avec son humain",
              value: "can_sleep_with_human",
            },
            {
              label:
                "Autres conditions d'accès spécifiques pour les animaux",
              value: "additional_specific_condition",
            },
          ],
        },
        {
          name: "pet_type_accepted",
          label: "Type d'animaux acceptés",
          type: "select",
          hasMany: true,
          options: [
            { label: "Tous animaux de compagnie", value: "all" },
            { label: "Chiens", value: "dogs" },
            { label: "Chats", value: "cats" },
            { label: "Petits chiens", value: "small_dogs" },
            {
              label: "NAC - Nouveaux animaux de compagnie",
              value: "nac",
            },
          ],
        },
        {
          name: "additional_specific_condition",
          label: "Autres conditions d'accès spécifiques",
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
          label: "Service  humain Santé / Alimentation",
          type: "collapsible",
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: "health",
              label: "Sélectionnez les services disponibles",
              type: "group",
              fields: [
                {
                  name: "doctor",
                  label: "Présence d'un(e) médecin",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "nurse",
                  label: "Présence d'un(e) infirmier(e)",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "psychologist",
                  label: "Accompagnement psycologique",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "social_services",
                  label: "Accompagnement social",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Dépistage / Addiction",
                  name: "addiction",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Boissons chaudes",
                  name: "hot_drinks",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Restauration / repas",
                  name: "food",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Distribution alimentaire",
                  name: "food_distribution",
                  type: "group",
                  fields: buildServicesField,
                },
              ],
            },
          ],
        },
        {
          label: "Service humain Autre sservices",
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
                  label: "Prise électrique",
                  fields: buildServicesField,
                },
                {
                  label: "Wifi / Internet",
                  name: "wifi",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Espace de repos",
                  name: "resting_space",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "vestiaire",
                  type: "group",
                  label: "Vestiaire",
                  fields: buildServicesField,
                },
                {
                  label: "Aide administrative",
                  name: "administrative_help",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Autre",
                  name: "other",
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
          label: "Services animal - Le soigner",
          type: "collapsible",
          fields: [
            {
              name: "health",
              label: "Sélectionnez les services disponibles",
              type: "group",
              fields: [
                {
                  label: "Accès aux soins vétérinaires",
                  name: "vet",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Consultation vétérinaire sur place",
                  name: "vet_consultation",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "surgery",
                  label: "Chirurgie / Sterilisation",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Identification puçage",
                  name: "identification",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Détartrage dentaire",
                  name: "dental_care",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Traitement contre les parasites",
                  name: "parasytic_treatment",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  name: "vaccination",
                  label: "Vaccination",
                  type: "group",
                  fields: buildServicesField,
                },
              ],
            },
          ],
        },
        {
          type: "collapsible",
          label: "Services animal - Le garder",
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
                  label: "En famille d'accueil solidaire",
                  name: "foster_family",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Garde en chenil / pension",
                  name: "kennel",
                  type: "group",
                  fields: buildServicesField,
                },
              ],
            },
          ],
        },
        {
          label: "Services animal - Le nourrir",
          type: "collapsible",
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: "feeding",
              label: "Sélectionnez les services disponibles",
              type: "group",
              fields: [
                {
                  label: "Distribution alimentaire sur place",
                  name: "food_distribution",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Gamelles sur place",
                  name: "bowls",
                  type: "group",
                  fields: buildServicesField,
                },
              ],
            },
          ],
        },
        {
          label: "Services animal - En prendre soin",
          type: "collapsible",
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: "feeding",
              label: "Sélectionnez les services disponibles",
              type: "group",
              fields: [
                {
                  label: "Aide au comportement de animal",
                  name: "behavior_help",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label:
                    "Distribution de matériel (sellerie, accessoires, etc...)",
                  name: "equipment_distribution",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Atelier bien être (massage, osthéo, ...)",
                  name: "wellness_workshop",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Animations / Sorties",
                  name: "animations",
                  type: "group",
                  fields: buildServicesField,
                },
                {
                  label: "Toilettage",
                  name: "grooming",
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
