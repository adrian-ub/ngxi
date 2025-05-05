import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPiggyIcon],svg[picon-piggy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0C0 3 6 3 3 0m1 4H1v1h3m2-2H5v1h1m2 1Q6 4 6 8H5Q3 6 1 8H0V5q0-2 4-2l2-2q0 2 2 2"></svg:path>`,
})
export class PiconPiggyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
