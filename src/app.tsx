import React from "react";
import { DSProviderInterop } from "./ds-interop";
import { DesignSystemDefaults } from "@microsoft/fast-components-styles-msft"

export class App extends React.Component {
    public render() {
        return (
            <DSProviderInterop designSystem={DesignSystemDefaults}>
                hello world
            </DSProviderInterop>
        )
    }
}