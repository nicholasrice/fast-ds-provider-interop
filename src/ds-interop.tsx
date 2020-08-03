/** @jsx createElement */
import createElement from "./create-element";
import React from "react";
import { FASTDesignSystemProvider } from "@microsoft/fast-components-msft";
import { DesignSystemProvider } from "@microsoft/fast-jss-manager-react";
import { DesignSystem } from "@microsoft/fast-components-styles-msft";
import { ProgressPlugin } from "webpack";

// Prevent tree shaking
FASTDesignSystemProvider;

export interface DSProviderInteropProps {
    designSystem: Partial<DesignSystem>,
    children?: React.ReactNode,
    useDefaults?: boolean;
}
export function DSProviderInterop(props: DSProviderInteropProps) {
    return (
        <DesignSystemProvider designSystem={props.designSystem}>
            <fast-design-system-provider props={{...props.designSystem, useDefaults: !!props.useDefaults}}>
                {props.children}
            </fast-design-system-provider>
        </DesignSystemProvider>
    )
}