import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBusIcon],svg[picon-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v1h1V5M1 5v1h1V5M1 2v2h6V2m0 6H6V7H2v1H1L0 7V1l2-1h4l2 1v6"></svg:path>`,
})
export class PiconBusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
