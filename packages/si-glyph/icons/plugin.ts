import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPluginIcon],svg[si-glyph-plugin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.016 7.038h-5v2.931h5v.829l5.922 2.175v-8.93L5.016 6.219zm10.937-.054v-.968h-2.971V4.043h-.962v8.93h.962v-1.989h2.971v-.968h-2.971V6.984z"></svg:path>`,
})
export class SiGlyphPluginIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
