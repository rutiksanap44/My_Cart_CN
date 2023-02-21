import React from 'react';

const NavBar = () => {
    return (
        <div style={styles.nav} >
            <div style={styles.cartIconContainer} >
                <img style={styles.cartIcon} src='https://cdn.iconscout.com/icon/free/png-256/cart-1438628-1214047.png?f=avif&w=128' alt='cart_icon' />
                <span style={styles.cartCount} >3</span>
            </div>
        </div>
    )
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
};

export default NavBar;