'use client';

export default function CssEx2() {
    const onChage = (e) => {
        
    }



    return (
        <div>
            <h1>CssEx2 page</h1>
            <button className="button">버튼2</button>
            <style jsx>{`
                .button {
                    color: white;
                    background-color: black;
                    border-radius: 5px;
                    padding: 10px 20px;
                    
                }                
            `}</style>
        </div>
    )
}