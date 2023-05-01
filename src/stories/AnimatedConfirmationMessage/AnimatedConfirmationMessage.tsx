import * as _ from 'lodash-es';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Text, Title } from '@thumbtack/thumbprint-react';
import { animateCheckmark } from './lottie/scripts/animate-checkmark';


export type AnimatedConfirmationMessageProps = {
    title: string,
    subtitle: string,
    showAnimation: boolean,
    titleSize: 3 | 1 | 2 | 4 | 6 | 5 | 7 | 8,
    subtitleSize:  3 | 1 | 2 ,
    isCenterTitleBody: boolean,
};

const defaultProps = {
    title: '',
    subtitle: '',
    showAnimation: true,
    titleSize: 3,
    subtitleSize: 1,
    isCenterTitleBody: false,
};

export function AnimatedConfirmationMessage({
    title,
    subtitle,
    showAnimation,
    isCenterTitleBody,
    titleSize,
    subtitleSize,
}:AnimatedConfirmationMessageProps): JSX.Element {
    const animatedCheckmark = useRef(null);
    const [animationLoaded, setAnimationLoaded] = useState(false);

    useEffect(() => {
        // lazy load the lottie util here because this causes certain tests to fail otherwise
        if (showAnimation) {
    
            setAnimationLoaded(true);
            animateCheckmark(animatedCheckmark.current)
        }
    }, []);

    const renderFormattedTextSubtitle = () => {
        return (
            <Text>
                {subtitle}
            </Text>
        ) 
    };

    return (
        <React.Fragment>
            {/* Negative margin to position text correctly after animation finishes, since the
                 animation container is taller than the final state of the icon */}
            <div
                className={classNames('flex justify-center', {
                    '-mb6': animationLoaded,
                })}
            >
                <div ref={animatedCheckmark} />
            </div>
            <div className={`w-100 ${isCenterTitleBody ? 'flex flex-column' : ''}`}>
                {title && (
                    <Title
                        size={titleSize}
                        headingLevel={1}
                        className={`mv3 mt0 ${isCenterTitleBody ? 'tc' : ''}`}
                    >
                        {title}
                    </Title>
                )}
      
                    <Text size={subtitleSize} className={`${isCenterTitleBody ? 'tc' : ''}`}>
                        {subtitle}
                    </Text>

            </div>
        </React.Fragment>
    );
}

