export { to as default, to, from }

to.from = from

function to(rgba, normalized = true) {
	let [r, g, b, a = normalized ? 1 : 255] = rgba
	if (normalized) { r *= 255; g *= 255; b *= 255; a *= 255 }
	return (byte(r) << 24 | byte(g) << 16 | byte(b) << 8 | byte(a)) >>> 0
}

function from(n, normalized = true) {
	const r = n >>> 24, g = (n >>> 16) & 0xFF, b = (n >>> 8) & 0xFF, a = n & 0xFF
	return normalized ? [r / 255, g / 255, b / 255, a / 255] : [r, g, b, a]
}

function byte(v) { return (v > 255 ? 255 : v < 0 ? 0 : v) & 0xFF }
