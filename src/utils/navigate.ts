export default function navigate(href: string) {
    const event = new CustomEvent("transition", { detail: href });
    dispatchEvent(event);
}