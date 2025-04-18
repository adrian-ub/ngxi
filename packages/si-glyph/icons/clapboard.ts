import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphClapboardIcon],svg[si-glyph-clapboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.042 7.954l14.916-3.523l-.98-4.056L1.063 3.898zM13.55 4.357l-1.448-2.312l2.01-.486l1.449 2.312zm-3.351.81L8.75 2.855l2.009-.485l1.45 2.312zm-3.351.81L5.4 3.665l2.01-.485l1.449 2.312zm-3.35.81L2.049 4.475l2.009-.485l1.449 2.312zm-1.477 1.25H17v7.95H2.021z"></svg:path>`,
})
export class SiGlyphClapboardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
