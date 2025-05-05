import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconConeIcon],svg[picon-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h8v1H0m2.5-5h3L6 5H2m1.5-5h1L5 2H3M1.5 6h5L7 7H1"></svg:path>`,
})
export class PiconConeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
