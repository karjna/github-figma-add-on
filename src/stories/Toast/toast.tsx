import React, { useEffect, useRef, useState } from 'react';
import { TextButton } from '@thumbtack/thumbprint-react';
import classNames from 'classnames';


enum ToastThemes {
    alert = 'alert',
    caution = 'caution',
    default = 'default',
    info = 'info',
    success = 'success',
}
export type ToastTheme = keyof typeof ToastThemes;

export type ToastProps = {
    hideIcon?: boolean;
    id?: number;
    icon?: JSX.Element;
    index?: number;
    isDismissible?: boolean;
    isOpen?: boolean;
    ctaAction?: () => void;
    ctaText?: string;
    ctaUrl?: string;
    onClose?: (id: number) => void;
    onOpen?: (id: number) => void;
    text: string;
    timeout?: number;
    toastTopPosition?: number;
    theme?: ToastTheme;
};

type IconsType = {
    [K in keyof typeof ToastThemes]: JSX.Element | null;
};

const icons: IconsType = {
    [ToastThemes.default]: null,
    [ToastThemes.caution]: <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-thumbprint-id="notification-alerts-warning"> <path d="M13.9995 19C13.4475 19 12.9995 19.448 12.9995 20C12.9995 20.552 13.4475 21 13.9995 21C14.5515 21 14.9995 20.552 14.9995 20C14.9995 19.448 14.5515 19 13.9995 19ZM13.9995 9C13.4475 9 12.9995 9.448 12.9995 10V15.997C12.9995 16.549 13.4475 16.997 13.9995 16.997C14.5515 16.997 14.9995 16.549 14.9995 15.997V10C14.9995 9.448 14.5515 9 13.9995 9ZM23.6805 21.827C23.2555 22.562 22.4925 23 21.6395 23H6.36054C5.50754 23 4.74454 22.562 4.31954 21.827C3.89754 21.099 3.89554 20.228 4.31454 19.498L11.9535 6.182C12.3785 5.442 13.1435 5 13.9995 5C14.8565 5 15.6215 5.442 16.0465 6.182L23.6855 19.498C24.1035 20.228 24.1025 21.099 23.6805 21.827ZM25.4195 18.503L17.7805 5.187C16.9945 3.818 15.5815 3 13.9995 3C12.4165 3 11.0045 3.818 10.2195 5.187L2.57954 18.503C1.80154 19.859 1.80554 21.476 2.58854 22.829C3.37454 24.188 4.78554 25 6.36054 25H21.6395C23.2135 25 24.6235 24.188 25.4115 22.829C26.1945 21.476 26.1985 19.859 25.4195 18.503Z"/> </svg> ,
    [ToastThemes.info]: <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-thumbprint-id="notification-alerts-info"> <path d="M13.9995 7.99719C13.4462 7.99719 12.999 8.44541 12.999 8.99768C12.999 9.54995 13.4462 9.99817 13.9995 9.99817C14.5538 9.99817 15 9.54995 15 8.99768C15 8.44541 14.5538 7.99719 13.9995 7.99719ZM21.0742 21.0746C17.1752 24.9755 10.8248 24.9755 6.92582 21.0746C3.02278 17.1737 3.02278 10.8266 6.92582 6.92566C10.8258 3.02575 17.1742 3.02475 21.0742 6.92566C24.9772 10.8266 24.9772 17.1737 21.0742 21.0746ZM22.4889 5.51097C17.8085 0.829677 10.1915 0.829677 5.51108 5.51097C0.82964 10.1913 0.82964 17.809 5.51108 22.4893C7.8503 24.8304 10.9259 26 13.9995 26C17.0741 26 20.1487 24.8304 22.4889 22.4893C27.1704 17.809 27.1704 10.1913 22.4889 5.51097ZM13.9995 11.9991C13.4462 11.9991 12.999 12.4474 12.999 12.9996V19.0026C12.999 19.5548 13.4462 20.0031 13.9995 20.0031C14.5538 20.0031 15 19.5548 15 19.0026V12.9996C15 12.4474 14.5538 11.9991 13.9995 11.9991Z"/> </svg> ,
    [ToastThemes.alert]: <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-thumbprint-id="notification-alerts-blocked"> <path d="M6.92496 21.0747C3.26313 17.413 3.04002 11.5943 6.25363 7.6695L20.3307 21.746C16.4057 24.9595 10.5868 24.7364 6.92496 21.0747ZM21.075 6.92515C24.7359 10.5878 24.959 16.4055 21.7454 20.3314L7.66833 6.25484C9.50325 4.75215 11.7514 4.0008 13.9995 4.0008C16.5618 4.0008 19.1241 4.97525 21.075 6.92515ZM22.4897 5.5105C17.8084 0.830334 10.1916 0.829334 5.51026 5.5105C0.829915 10.1917 0.829915 17.8082 5.51026 22.4894C7.85043 24.8294 10.925 26 13.9995 26C17.074 26 20.1486 24.8294 22.4897 22.4894C27.1701 17.8082 27.1701 10.1917 22.4897 5.5105Z"/> </svg> ,
    [ToastThemes.success]: <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-thumbprint-id="content-actions-check"> <path d="M21.5994 6.20009C21.1604 5.86809 20.5324 5.95909 20.2014 6.40009L11.8204 17.5751L7.6244 14.2191C7.1944 13.8741 6.5654 13.9451 6.2184 14.3751C5.8734 14.8061 5.9454 15.4361 6.3744 15.7811L12.1804 20.4251L21.7994 7.60009C22.1314 7.15809 22.0414 6.53109 21.5994 6.20009Z"/> </svg> ,
};

const toastSeparatorHeight = 10;
// toastHideHeight is an approximate height of a typical toast.
// The actual value isn't critical since the toast fades out as it's sliding up.
const toastHideHeight = 60;

export function Toast({
    id = 0,
    theme = ToastThemes.default,
    icon,
    isDismissible = true,
    hideIcon,
    text,
    ctaText,
    ctaAction,
    ctaUrl,
    onClose,
    onOpen,
    timeout = 5000,
    isOpen = false,
    toastTopPosition = 0,
    index = 0,
}: ToastProps): JSX.Element {
    const [openStyle, setOpenStyle] = useState('');
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const [toastTop, setToastTop] = useState(toastTopPosition - index * toastSeparatorHeight);
    const toastRef = useRef<HTMLDivElement>(null);
    const isMobile = useRef(false);

    useEffect(() => {
        isMobile.current = false;
    }, []);

    const onCloseClicked = (): void => {
        setOpenStyle('');
        if (toastRef.current) {
            setToastTop(
                isMobile.current
                    ? 0
                    : toastRef.current.getBoundingClientRect().top - toastHideHeight,
            );
        }
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        if (isOpen) {
            // this is necessary so that the  initial 'show' animation happens, otherwise it just pops up without animating
            // the value used is somewhat arbitrary since we just need it to happen after the main event loop
            timeoutId = setTimeout(() => setOpenStyle('open'), 50);
        } else {
            setOpenStyle('');
        }
        return () => clearTimeout(timeoutId);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            setToastTop(toastTopPosition + index * toastSeparatorHeight);
        } else {
            setToastTop(toastTopPosition - index * toastHideHeight);
        }
    }, [isOpen, toastTopPosition, index]);

    useEffect(() => {
        if (timeout && timeout > 0 && onClose) {
            timeoutRef.current = setTimeout(onCloseClicked, timeout);
        }
    }, [timeout]);

    const transitionEnd = (): void => {
        if (openStyle === '' && onClose) {
            onClose(id);
        } else if (onOpen) {
            onOpen(id);
        }
    };

    const clickCta = (): void => {
        if (ctaAction) {
            ctaAction();
        }
        onCloseClicked();
    };
    // on mobile, toasts should come from the bottom
    // on desktop, from the top

    const topPositionStyle = isMobile.current
        ? { bottom: `${toastTop}px` }
        : { top: `${toastTop}px` };

    return (
        <div
            id={`toast-${id}`}
            className={classNames('toast', openStyle, {
                ['default']: theme === ToastThemes.default,
                ['caution']: theme === ToastThemes.caution,
                ['alert']: theme === ToastThemes.alert,
                ['success']: theme === ToastThemes.success,
                ['info']: theme === ToastThemes.info,
                ['mobile']: isMobile.current,
            })}
            style={topPositionStyle}
            onTransitionEnd={transitionEnd}
            ref={toastRef}
        >
            <div className={'content'}>
                {!hideIcon && <div className={'icon'}>{icon || icons[theme]}</div>}
                <div className={'text'} aria-live="polite">
                    {text}
                    {ctaText && (ctaAction || ctaUrl) && (
                        <React.Fragment>
                            &nbsp;
                            {ctaUrl ? (
                                <a
                                    href={ctaUrl}
                                    tabIndex={0}
                                    className={'link'}
                                    onClick={clickCta}
                                >
                                    {ctaText}
                                </a>
                            ) : (
                                <TextButton onClick={clickCta}>{ctaText}</TextButton>
                            )}
                        </React.Fragment>
                    )}
                </div>

                {isDismissible && (
                    <div className={'close'}>
                        <TextButton
                            theme="inherit"
                            iconLeft={<svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-thumbprint-id="navigation-close"> <path d="M15.4144 14.0001L20.7074 8.70713C21.0984 8.31613 21.0984 7.68413 20.7074 7.29313C20.3154 6.90213 19.6844 6.90213 19.2934 7.29313L14.0004 12.5861L8.70739 7.29313C8.31539 6.90213 7.68439 6.90213 7.29339 7.29313C6.90139 7.68413 6.90139 8.31613 7.29339 8.70713L12.5864 14.0001L7.29339 19.2931C6.90139 19.6841 6.90139 20.3161 7.29339 20.7071C7.48739 20.9021 7.74339 21.0001 8.00039 21.0001C8.25639 21.0001 8.51239 20.9021 8.70739 20.7071L14.0004 15.4141L19.2934 20.7071C19.4874 20.9021 19.7434 21.0001 20.0004 21.0001C20.2564 21.0001 20.5124 20.9021 20.7074 20.7071C21.0984 20.3161 21.0984 19.6841 20.7074 19.2931L15.4144 14.0001Z"/> </svg> }
                            accessibilityLabel="Close"
                            onClick={onCloseClicked}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
