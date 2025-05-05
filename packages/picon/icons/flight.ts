import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFlightIcon],svg[picon-flight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3V2h1l1 1h2L3 1h1l2 2h2v1H1"></svg:path>`,
})
export class PiconFlightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
