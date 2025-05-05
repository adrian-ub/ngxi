import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPianoIcon],svg[picon-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6V3c0-4 5-4 5 0c1 2 3 0 3 3H7v1.5H1V6m1 1h4V6H2"></svg:path>`,
})
export class PiconPianoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
