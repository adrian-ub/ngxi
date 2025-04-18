import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCalculatorIcon],svg[ph-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 120h96a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8m8-48h80v32H88Zm112-48H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H56V40h144Zm-100-68a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-80 40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCalculatorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
