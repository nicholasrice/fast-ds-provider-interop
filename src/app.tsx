import React from "react";
import { DSProviderInterop } from "./ds-interop";
import { DesignSystemDefaults } from "@microsoft/fast-components-styles-msft"
import { Heading, Button, Paragraph, ButtonAppearance } from "@microsoft/fast-components-react-msft";

export class App extends React.Component<{}, {backgroundColor: string}> {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: DesignSystemDefaults.neutralPalette[0]
        }
    }
    public render() {
        return (
            <DSProviderInterop designSystem={{...DesignSystemDefaults, backgroundColor: this.state.backgroundColor}} useDefaults={true}>
                <label>Background color: 
                    <input
                        type="color"
                        value={this.state.backgroundColor}
                        list="color-set"
                        onChange={(e) => this.setState({backgroundColor: e.target.value})}
                    />
                    <datalist id="color-set">
                        {DesignSystemDefaults.neutralPalette.map(color => <option>{color}</option>)}
                    </datalist>
                </label>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "24px"}}>
                    <div>
                        <Heading>React Components</Heading>
                        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, labore nobis delectus explicabo modi officia, aperiam maiores saepe accusamus excepturi illum rerum eaque magni sit? Quisquam atque perspiciatis sed ratione.</Paragraph>
                        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, labore nobis delectus explicabo modi officia, aperiam maiores saepe accusamus excepturi illum rerum eaque magni sit? Quisquam atque perspiciatis sed ratione.</Paragraph>
                        <Button>Neutral</Button>
                        <Button appearance={ButtonAppearance.primary}>Primary</Button>
                    </div>
                </div>
            </DSProviderInterop>
        )
    }
}