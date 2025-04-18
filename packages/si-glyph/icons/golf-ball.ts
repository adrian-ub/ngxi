import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphGolfBallIcon],svg[si-glyph-golf-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.031 12l2 1.969V16h.907v-2.031l2-1.969zm-3-6.547a5.452 5.452 0 1 0 10.906 0a5.452 5.452 0 1 0-10.906 0"></svg:path>`,
})
export class SiGlyphGolfBallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
