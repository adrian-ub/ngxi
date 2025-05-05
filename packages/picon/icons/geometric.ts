import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGeometricIcon],svg[picon-geometric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V0l8 8M1 7h5L1 2m2 0c3-3 7 1 4 4m0-1c1-3-2-4-3-3"></svg:path>`,
})
export class PiconGeometricIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
