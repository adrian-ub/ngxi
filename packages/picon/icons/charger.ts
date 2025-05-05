import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChargerIcon],svg[picon-charger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h5v8H0m4-7L0 4h2m0 0L0 7l4-3m2-3v1h1V1h1L7 3v3H3l3-1V3L5 1"></svg:path>`,
})
export class PiconChargerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
