/**
 * Due to cross-browser inconsistencies in how DOM repaint calls are batched, any Lottie
 * animations triggered in React.Component.componentDidMount may have their initial animation
 * frames cut off. This utility uses two nested window.requestAnimationFrame calls to force the
 * animation to play between the first and second paints when invoked in componentDidMount. This
 * ensures all frames of the animation render.
 * https://stanko.github.io/react-rerender-in-component-did-mount/
 */

const forceFullAnimation = function ensureFullAnimationInComponentDidMount(playAnimationCallback) {
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            playAnimationCallback();
        });
    });
};

export default forceFullAnimation;
