import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCompassIcon],svg[picon-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l3-6h2l3 6l-4-5m3 0l1-1v3L7 4H6V3M3 1V0h2v1"></svg:path>`,
})
export class PiconCompassIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
