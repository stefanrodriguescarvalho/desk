import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles-engine/+esm";
import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";
import { loadCanvasMaskPlugin } from "https://cdn.jsdelivr.net/npm/tsparticles-plugin-canvas-mask/+esm";

(async() => {
    await loadFull(tsParticles);
    await loadCanvasMaskPlugin(tsParticles);

    tsParticles.load({
        smooth: true,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10
                    }
                }
            },
            modes: {
                bubble: {
                    distance: 40,
                    duration: 2,
                    opacity: 8,
                    size: 15
                }
            }
        },
        particles: {
            move: {
                direction: "none",
                distance: 5,
                enable: true,
                outModes: "out",
                speed: 1
            },
            number: {
                value: 600
            },
            shape: {
                type: ["circle", "square", "triangle"]
            },
            size: {
                value: {
                    min: 3,
                    max: 5
                }
            }
        },
        canvasMask: {
            enable: true,
            scale: 5,
            pixels: {
                filter: "pixelFilter"
            },
            image: {
                src: "https://particles.js.org/images/amongus_cyan.png"
            }
        },
        background: {
            color: "#000000",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        }
    });
})();