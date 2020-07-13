export default props => {
    if (Array.isArray(props.children)) {
        const elseChildren = props.children.filter(child => {
            return child.type && child.type.name === "Else";
        })[0];

        const ifChildren = props.children.filter(child => {
            return child !== elseChildren;
        });

        if (props.test) {
            return ifChildren;
        }

        if (elseChildren) {
            return elseChildren;
        }
    } else {
        if (props.test) {
            return props.children;
        }
    }

    return false;
}

export const Else = props => props.children;