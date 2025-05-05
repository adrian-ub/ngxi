import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAbacusIcon],svg[picon-abacus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h1v1h6V0h1v8H7V7H1v1H0m2-3h1v3H2M1 6h6V2H1m4-2h1v3H5M3 0h1v3H3"></svg:path>`,
})
export class PiconAbacusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
