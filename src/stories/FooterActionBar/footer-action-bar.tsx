import * as _ from 'lodash-es';
import React from 'react';
import classNames from 'classnames';
import { Button, Text, TextButton } from '@thumbtack/thumbprint-react';
// import '../styles/footerActionBar.scss';
// import styles from './footerActionBar;

export const CONTEXT_TEXT_ALIGN = {
    LEFT: 'left',
    CENTER: 'center',
};

export type FooterActionBarProps = {
    actionButtonEnabled?: boolean,
    actionButtonLoading?: boolean,
    actionButtonText: string,
    isActionSubmit?: boolean,
    onBackClick?: ()=>void,
    onActionClick: ()=>void,
    onSecondaryButtonClick?: ()=>void,
    showSecondaryButton?: boolean,
    secondaryButtonText?: string,
    secondaryButtonEnabled?: boolean,
    contextText?: string,
    contextTextAlignment?: "left" | "center",
    shouldRemoveStickyFooterOnMobile?: boolean,
    showBackButtonOnMobile?: boolean,
    additionalContent?: Element,
    secondaryButtonSize?: 'fit-content'| '',
};

export function FooterActionBar({
    actionButtonEnabled = true,
    actionButtonLoading = false,
    actionButtonText = "Save",
    isActionSubmit = true,
    onBackClick,
    onSecondaryButtonClick,
    onActionClick,
    showSecondaryButton = false,
    shouldRemoveStickyFooterOnMobile = false,
    secondaryButtonText,
    secondaryButtonEnabled = true,
    contextText,
    contextTextAlignment = 'left',
    showBackButtonOnMobile = false,
    additionalContent,
    secondaryButtonSize,
}:FooterActionBarProps): JSX.Element {
    const hasAction = _.isFunction(onActionClick) || isActionSubmit;

    const backButton = (
        <div className="dn m_flex b">
            <TextButton
                onClick={onBackClick}
                dataTest="footerActionBar__back-btn"
                // iconLeft={<NavigationArrowLeftMedium />}
            >
                <svg style={{verticalAlign: 'middle'}} width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-thumbprint-id="navigation-arrow-left"> <path d="M11.2364 21.6457L3 14L11.2751 6.31119C11.4572 6.1195 11.7147 6 12 6C12.5523 6 13 6.44772 13 7C13 7.24949 12.9086 7.47765 12.7575 7.65282L7.25 13H23.9981C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H7.25L12.699 20.2849C12.8856 20.485 13 20.7198 13 21C13 21.5523 12.5523 22 12 22C11.6939 22 11.4634 21.8487 11.2364 21.6457Z"/> </svg> Back
            </TextButton>
        </div>
    );

    const mobileBackButton = showBackButtonOnMobile && onBackClick && (
        <div className="b flex pa3 justify-center items-center">
            <TextButton onClick={onBackClick}>Back</TextButton>
        </div>
    );

    const secondaryButton = (
        <Button
            theme="tertiary"
            onClick={onSecondaryButtonClick}
            dataTest="footerActionBar__secondary-btn"
            width="full"
            isDisabled={!secondaryButtonEnabled}
        >
            {secondaryButtonText}
        </Button>
    );

    const actionButton = isActionSubmit ? (
        <Button
            isLoading={actionButtonLoading}
            isDisabled={!actionButtonEnabled}
            dataTest="footerActionBar__action-btn"
            width="full"
            type="submit"
        >
            {actionButtonText}
        </Button>
    ) : (
        <Button
            isLoading={actionButtonLoading}
            isDisabled={!actionButtonEnabled}
            onClick={onActionClick}
            dataTest="footerActionBar__action-btn"
            width="full"
        >
            {actionButtonText}
        </Button>
    );

    const contextTextElement = _.isString(contextText) ? (
        <Text size={3}>{contextText}</Text>
    ) : (
        contextText
    );

    const centerText = contextTextAlignment === CONTEXT_TEXT_ALIGN.CENTER;
    const onlyBackButtonOnMobile =
        !contextText && !showSecondaryButton && !hasAction && showBackButtonOnMobile;

    return (
        <div
            className={`footerActionBar  ${
                shouldRemoveStickyFooterOnMobile
                    ? 'absolute left0 right0 m_fixed m_bottom0'
                    : 'fixed left0 bottom0'
            }`}
        >
            
            <div
                className={classNames(
                    'footerActionBar__innerContainer flex flex-wrap m_mv0 m_center m_pa1 m_ph3',
                    { 'justify-center': centerText },
                )}
            >
                {contextText && <div className="db m_dn pa3">{contextTextElement}</div>}
                {mobileBackButton && <div className="w-100 m_dn">{mobileBackButton}</div>}
                <div
                    className={classNames( 'footerActionBar__mainContent', {
                        'dn m_flex items-center': onlyBackButtonOnMobile,
                    })}
                >
                    {/* Add placeholder div with flex-1 even if no back button is shown so the
                    context text can be centered on the page */}
                    <div className="flex justify-between items-center relative w-100">
                        <div
                            className={classNames({
                                'flex-1': centerText,
                            })}
                        >
                            {onBackClick && backButton}
                        </div>

                        {contextText && (
                            <div className="flex-1 l_flex-2 dn m_db ph4">{contextTextElement}</div>
                        )}

                        {(showSecondaryButton || hasAction) && (
                            <div
                                className={classNames(
                                    'flex items-center justify-center m_justify-end m_top0 m_bottom0 m_right2 ph3 pv1 w-100 m_w-auto flex-row',
                                    { 'm_flex-1': centerText },
                                )}
                            >
                                {showSecondaryButton && (
                                    <div
                                        className={classNames('m_w-auto', {
                                            mr3: hasAction,
                                            'w-100': secondaryButtonSize !== 'fit-content',
                                        })}
                                    >
                                        {secondaryButton}
                                    </div>
                                )}
                                {hasAction && <div className="w-100 m_w-auto">{actionButton}</div>}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}



