import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPillIcon],svg[si-glyph-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.897 1.731l-.656-.657C13.887-.281 11.745-.341 10.46.944L1.957 9.446c-1.284 1.285-1.224 3.425.133 4.782l.654.654c1.357 1.357 3.498 1.418 4.783.134l8.503-8.505c1.284-1.282 1.224-3.423-.133-4.78m-4.811 8.433L6.841 5.917l4.208-4.208c.945-.944 2.532-.898 3.535.107l.604.601c.49.493.771 1.135.787 1.809a2.33 2.33 0 0 1-.68 1.729z"></svg:path>`,
})
export class SiGlyphPillIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
