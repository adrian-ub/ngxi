import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphImageIcon],svg[si-glyph-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(0 2)"><svg:path d="M13.438 11.944H2.557c-1.394 0-2.528-1.163-2.528-2.591v-6.75c0-1.43 1.135-2.591 2.528-2.591h10.881c1.393 0 2.527 1.161 2.527 2.591v6.75c0 1.428-1.135 2.591-2.527 2.591M2.237.979c-.7 0-1.272.614-1.272 1.371v7.318c0 .757.572 1.371 1.272 1.371h11.517c.702 0 1.273-.614 1.273-1.371V2.35c0-.757-.571-1.371-1.273-1.371z"></svg:path><svg:ellipse cx="5.471" cy="3.461" rx="1.471" ry="1.461"></svg:ellipse><svg:path d="m11.234 3.037l2.76 6.951H2.021L5.497 5.98l3.117.944z"></svg:path></svg:g>`,
})
export class SiGlyphImageIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
