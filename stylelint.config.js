/** @type {import("stylelint").Config} */
export default {
  extends: "stylelint-config-standard-scss",
  plugins: [
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-plugin-defensive-css",
  ],
  rules: {
    "no-descending-specificity": null,
    "order/properties-alphabetical-order": true,
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/use-defensive-css": [
      true,
      {
        severity: "warning",
        "accidental-hover": true,
        "background-repeat": true,
        "custom-property-fallbacks": true,
        "flex-wrapping": true,
        "scroll-chaining": true,
        "scrollbar-gutter": true,
        "vendor-prefix-grouping": true,
      },
    ],
  },
};
