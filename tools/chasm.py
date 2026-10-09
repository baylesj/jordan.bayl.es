"""Regenerate chasm.svg (bars pinching to hairlines, echoing the Chasma Sound banner), then paste it into index.html:
python3 tools/chasm.py > chasm.svg"""
W, ROWS, PITCH, BAR, HAIR, TAPER = 1200, 9, 22, 12, 1.5, 22
mid = (ROWS - 1) / 2
out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {ROWS*PITCH}" preserveAspectRatio="none" fill="currentColor">']
for r in range(ROWS):
    y = r * PITCH + (PITCH - BAR) / 2
    open_ = 1 - (abs(r - mid) / (mid + 1)) ** 1.6  # widest gap in the middle rows
    gap = W * (0.08 + 0.34 * open_)
    a, b = W / 2 - gap / 2, W / 2 + gap / 2
    c, t = y + BAR / 2, HAIR / 2
    out.append(f'<path d="M0 {y} H{a-TAPER:.1f} L{a:.1f} {c-t} H{b:.1f} L{b+TAPER:.1f} {y} H{W} V{y+BAR} '
               f'H{b+TAPER:.1f} L{b:.1f} {c+t} H{a:.1f} L{a-TAPER:.1f} {y+BAR} H0 Z"/>')
out.append('</svg>')
print("\n".join(out))
