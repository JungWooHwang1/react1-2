import scss from `@/app/styles/bar.module.scss`;

export default function SassEx() {
    return (
        <div className={scss.bar}>
            <h1>SassEx page</h1>
            <button className="button">button</button>
        </div>
    )
}