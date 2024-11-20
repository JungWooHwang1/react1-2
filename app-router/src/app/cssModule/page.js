import foo from '@/app/styles/foo.module.css';

export default function CssModule() {
    return (
        <div>
            <h1 className={foo.foo}>CssModule page</h1>
            <button className={foo.button}>버튼2</button>
        </div>
    )
}