type ContainerProps = {
    style? : React.CSSProperties,
    children? : string,
    className? : string
}

const Container = ({style , children , className} : ContainerProps) => {
    return (
        <div  className={className}  style={style}>
            {children}
        </div>
    );
};

export default Container;