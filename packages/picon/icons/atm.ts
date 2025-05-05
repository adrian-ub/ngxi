import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAtmIcon],svg[picon-atm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4H0V1h8v3H7V2H1m1 6V3h4v5M4 7l1-1l-1-1h1L4 4L3 5l1 1H3"></svg:path>`,
})
export class PiconAtmIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
