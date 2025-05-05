import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRollIcon],svg[picon-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c0-4 3-4 3 0S5 7 5 3m0-3C3 0 5 8 3 8H0c1 0 0-8 1-8m5 4h1V2H6"></svg:path>`,
})
export class PiconRollIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
