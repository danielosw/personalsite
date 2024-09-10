const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
  plugins: [
    require("postcss-nesting"),
		require("postcss-import"),
		require("tailwindcss"),
		require("autoprefixer"),
		require("cssnano")({
			preset: "advanced",
		}),
		purgecss({
			content: ["./src/**/*.html", "./src/**/*.svelte"],
			defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		}),
  ]
};
