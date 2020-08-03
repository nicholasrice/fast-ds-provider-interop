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
    children?: React.ReactNode
}
export function DSProviderInterop({ designSystem, children}) {
    return (
        <DesignSystemProvider designSystem={designSystem}>
            <fast-design-system-provider props={designSystem}>
                {children}
            </fast-design-system-provider>
        </DesignSystemProvider>
    )
}