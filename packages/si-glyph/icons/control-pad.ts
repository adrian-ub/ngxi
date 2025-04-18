import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphControlPadIcon],svg[si-glyph-control-pad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4.277 7.048c-2.344 0-3.242 1.958-3.242 4.372v.166c0 2.416.898 4.373 3.242 4.373h9.475c2.344 0 3.242-1.957 3.242-4.373v-.166c0-2.414-.898-4.372-3.242-4.372zM8 12H6v2.016H5V12H3v-1h2V8.984h1V11h2zm4-1h-1v-1h1zm2 2h-1v-1h1z"></svg:path><svg:path d="M9 7.104H8V4l2.031.041L10 1.047h1V5H9z"></svg:path></svg:g>`,
})
export class SiGlyphControlPadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
