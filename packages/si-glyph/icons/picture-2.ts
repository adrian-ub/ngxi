import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPicture2Icon],svg[si-glyph-picture-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 0v16h16V0zm14 11H3V2h12z"></svg:path>`,
})
export class SiGlyphPicture2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
