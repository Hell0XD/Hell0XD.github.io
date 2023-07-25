import Lenis from "@studio-freight/lenis";

export default function () {
    const lenis = new Lenis({
        lerp: undefined,
        // infinite: true,
    });

    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const anchors = document.getElementsByTagName("a");

    for (const anchor of anchors) {
        if (!anchor.href.includes("#")) continue;

        const target = document.getElementById(anchor.href.split("#")[1]);
        anchor.addEventListener("click", (e) => {
            lenis.scrollTo(target);
        });
    }

    return lenis;
}