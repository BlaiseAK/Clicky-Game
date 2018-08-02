import React from "react"

const styles ={
    panelUl: {
        margin: "auto",
        width: "auto",
        background: "#FFD700",
        listStyleType: "none",
        OverflowEvent: "scroll",
        height: 50,
        contentAlign: "center"
    },
    li: {
    display: "inline-block",
    marginLeft: 40

    }
};

const Navbar = () => (
    <div>
        <nav>
            <ul className="unstyled" style={styles.panelUl}>
                <li style={styles.li}><strong>A Game of Clicks</strong></li>
                <li style={styles.li}>This will need to change</li>
                <li style={styles.li}>Score: 0 | Top Score: 0</li>
            </ul>
        </nav>
    </div>
)

export default Navbar