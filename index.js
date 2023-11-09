const ellipseArea = (sirka, vyska) => {
    const plocha = (sirka / 2) * (vyska / 2) * Math.PI
    return plocha
    //return (sirka / 2) * (vyska / 2) * Math.PI
}

document.body.innerHTML = `
<p>Obsah1: ${ellipseArea(1, 2)}</p>
<p>Obsah2: ${ellipseArea(2, 2)}</p>
`