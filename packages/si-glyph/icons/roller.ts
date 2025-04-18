import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphRollerIcon],svg[si-glyph-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.5 15.938a.5.5 0 0 1-.5-.5v-3.906c0-.275.225-.5.5-.5H8V8.389c0-.248.179-.456.425-.494L16 5.93V3.032h-.5a.5.5 0 0 1-.5-.5c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v3.857a.496.496 0 0 1-.423.494L9 8.849v2.183h.5c.275 0 .5.225.5.5v3.906c0 .275-.225.5-.5.5z"></svg:path><svg:path d="M14 3V2a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2"></svg:path></svg:g>`,
})
export class SiGlyphRollerIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
