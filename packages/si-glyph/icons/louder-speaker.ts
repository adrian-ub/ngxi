import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphLouderSpeakerIcon],svg[si-glyph-louder-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.031 4.571V7.25C.031 8.118.697 9 1.521 9h6.447V3H1.521c-.824 0-1.49.703-1.49 1.571m7.032 11.367H4.025L2.062 9.062H5.1zM13 0L9 2.76v5.981L13 12zm0 3.989V8c1.086 0 1.969-.897 1.969-2.006c0-1.107-.883-2.005-1.969-2.005"></svg:path>`,
})
export class SiGlyphLouderSpeakerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
