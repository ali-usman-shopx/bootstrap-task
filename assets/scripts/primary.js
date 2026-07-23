
import gsap from "gsap";

function spinElement(identifier, repeat, duration) {
    gsap.to(
        identifier,
        {
            rotateZ: -360,
            duration: duration,
            repeat: repeat
        }
    );
}
