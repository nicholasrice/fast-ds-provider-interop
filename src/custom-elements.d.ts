declare namespace JSX {
    interface IntrinsicElements {
        /**
         * Extend JSX.IntrinsicElements to allow TypeScript to use custom elements in JSX
         */
        "fast-design-system-provider": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
            props: Partial<any>
        }, HTMLElement>;
        "fast-button": React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement> & {
            appearance?: string
        }, HTMLButtonElement>;
    }
}