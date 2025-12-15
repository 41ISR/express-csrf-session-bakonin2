import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Index = () => {
    const handleSubmit =  (e) => {
        console.log(clicks)
    }
    const formRef = useref(null)
    const navigate = useNavigate()
    const [clicks, setClicks] = useState(0)
    useEffect(()=> {
        const interval = setInterval(()=> {
            formRef.current && handleSubmit()
        }, 5000)
        return () => {clearInterval(interval)}
    }, [])

    const handleClick = () => {
        setClicks((val) => val + 1)
    }

    const handleLogout = () => {
        navigate("/logout")
    }
    return (
        <div className="container">

            <div className="header">
                <h1>🎮 Кликер Игра</h1>
                <div className="user-info">
                    <span><strong>Имя пользователя</strong></span>
                    <button onClick={handleLogout} className="logout-btn">Выйти</button>
                </div>
            </div>
            <div className="game-area">

                <div className="click-counter">
                    <h2>Твои клики</h2>
                    <div className="clicks-display">{clicks}</div>
                    <form onSubmit={(e) => e.preventDefault()} ref={formRef}>
                    <button className="click-button" onClick={handleClick}>👆 КЛИКНИ!</button>
                    </form>
                </div>

                <div className="leaderboard">
                    <h2>🏆 Топ-10 игроков</h2>
                    <ol>
                        <li>
                            <span className="rank">#1</span>
                            <span className="username">bob</span>
                            <span className="score">200 кликов</span>
                        </li>
                        <li>
                            <span className="rank">#2</span>
                            <span className="username">alice</span>
                            <span className="score">150 кликов</span>
                        </li>
                        <li className="current-user">
                            <span className="rank">#3</span>
                            <span className="username">you</span>
                            <span className="score">42 клика</span>
                        </li>
                        <li>
                            <span className="rank">#4</span>
                            <span className="username">charlie</span>
                            <span className="score">75 кликов</span>
                        </li>
                    </ol>
                </div>

            </div>
        </div>
    )
}

export default Index