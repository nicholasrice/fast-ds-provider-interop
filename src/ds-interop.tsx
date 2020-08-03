/** @jsx createElement */
import createElement from "./create-element";
import React from "react";
import { FASTDesignSystemProvider } from "@microsoft/fast-components-msft";
import { DesignSystemProvider } from "@microsoft/fast-jss-manager-react";
import { DesignSystem } from "@microsoft/fast-components-styles-msft";

// Prevent tree shaking
FASTDesignSystemProvider;

export interface DSProviderInteropProps {
    designSystem: Partial<DesignSystem>,
    children?: React.ReactNode,
    useDefaults?: boolean;
}

/**
 * This is the interop layer between @microsoft/fast-jss-manager-react and @microsoft/fast-components-msft.
 * 
 * The WC version includes a `useDefaults` attribute that should be used at the root of the view to apply the default
 * design system values. Overrides can then be added to that instance of any nested instance.
 */
export function DSProviderInterop(props: DSProviderInteropProps) {
    return (
        <DesignSystemProvider designSystem={props.designSystem}>
            <fast-design-system-provider props={{...props.designSystem, useDefaults: !!props.useDefaults}}>
                {props.children}
            </fast-design-system-provider>
        </DesignSystemProvider>
    )
}