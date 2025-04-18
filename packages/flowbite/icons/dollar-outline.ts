import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteDollarOutlineIcon],svg[flowbite-dollar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31c.487-1.866-1.273-3.9-3.546-4.49S7.977 9.54 8.464 7.675s2.724-2.899 4.998-2.31c.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"></svg:path>`,
})
export class FlowbiteDollarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
