import Lottie from 'lottie-web';
import confirmationAnimationData from './confirmation-animation-data.json';
import forceFullAnimation from './lottie.es6';

export const animateCheckmark = (containerElement) => {
    Lottie.loadAnimation({
        container: containerElement,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: confirmationAnimationData,
    });
    forceFullAnimation(Lottie.play);
};
