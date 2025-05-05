import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFuelIcon],svg[picon-fuel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 1l2 2v5H6V6Q3 6 4 2H1V1m4 1Q4 5 6 5M1.5 3C4 7-1 7 1.5 3"></svg:path>`,
})
export class PiconFuelIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
