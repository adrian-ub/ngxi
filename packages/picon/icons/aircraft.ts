import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAircraftIcon],svg[picon-aircraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 1l4-1v1L2 0m6 2q0 2-2 2H2Q0 4 0 2m2 5h4L5 8H3m0-4V1h2v3L4 8"></svg:path>`,
})
export class PiconAircraftIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
