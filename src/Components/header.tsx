import React, {ReactNode, ReactElement} from 'react';

const defaultContainerProps = {
    heading: <strong>Derek's Portfolio</strong>,
    children: <p></p>
};

//Default Typings
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
function Header({ heading, children }: ContainerProps): ReactElement | null {
return (
    <div className="header">
        <h1>{heading}</h1>
        {children}
    </div>
);
}
Header.defaultProps = defaultContainerProps;

export default Header;
