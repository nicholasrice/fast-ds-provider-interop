declare namespace JSX {
    interface IntrinsicElements {
        "fast-design-system-provider": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
            props: Partial<any>
        }, HTMLElement>;
        "fast-button": React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement> & {
            appearance?: string
        }, HTMLButtonElement>;
    }
}