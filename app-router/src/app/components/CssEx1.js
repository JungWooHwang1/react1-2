'use client';

export default function CssEx1() {
    const onChage = (e) => {
        
    }



    return (
        <div>
            <h1>CssEx1 page</h1>
            <button className="button">버튼1</button>
            <style jsx>{`
                .button {
                    color: white;
                    background-color: blue;
                    border-radius: 5px;
                    padding: 10px 20px;
                    
                }                
            `}</style>
        </div>
    )
}