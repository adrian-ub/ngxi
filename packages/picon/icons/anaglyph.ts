import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAnaglyphIcon],svg[picon-anaglyph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v1h2V3M1 3v1h2V3m2 2L4 4L3 5H0V2h8v3"></svg:path>`,
})
export class PiconAnaglyphIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
