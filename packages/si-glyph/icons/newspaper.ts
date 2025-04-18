import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphNewspaperIcon],svg[si-glyph-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.031 2.046v9.788c0 .386-1.062.389-1.062.016V6.063H1.022v6.918c-.004.104.031.991.979.991l14-.012s.973-.049.973-.96V2zm4.011 8.016h-2.07V6.937h2.07zM15 8H9V6.958h6zm0 2.083H8.981V8.939l6.019.02zm0 1.955H5.987v-1.08H15zm0-5.997H6V3.937h9z"></svg:path>`,
})
export class SiGlyphNewspaperIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
