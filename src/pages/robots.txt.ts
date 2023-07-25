import type { APIContext } from "astro"

export function get({ site }: APIContext) {
    const robots = [
        "User-agent: *",
        "Allow: /",
        `Sitemap: ${site}sitemap-index.xml`
    ];

    return {
        body: robots.join("\n")
    }
}