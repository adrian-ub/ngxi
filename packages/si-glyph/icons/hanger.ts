import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphHangerIcon],svg[si-glyph-hanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.542 11.375S9.841 6.953 9.579 6.846V5.96c.827-.233 1.38-1.005 1.38-1.915c0-1.098-.885-1.99-1.971-1.99a1.98 1.98 0 0 0-1.969 1.99c0 .293.237.529.531.529c.293 0 .426-.342.426-.635c0-.512.545-.981 1.044-.981c.5 0 1.021.575 1.021 1.087c0 .511-.554.928-1.054.928c-.294 0-.473.237-.473.529v1.322c-.198.073-6.995 4.551-6.995 4.551c-.503.513-1.188 2.582 1.206 2.582h12.581c2.194 0 1.717-2.094 1.236-2.582m-.985 1.646H2.456c-.671 0-.652-.756-.347-1.086l6.349-4.016c.343-.182.774-.206 1.113-.004l6.37 4.021c.307.33.231 1.085-.384 1.085"></svg:path>`,
})
export class SiGlyphHangerIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
