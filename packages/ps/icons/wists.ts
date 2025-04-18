import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psWistsIcon],svg[ps-wists-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h123q2 43 11 109.5t11 95.5q5-31 13-109t10-96h124q1 43 5.5 105t5.5 99q14-65 34-204h123q-7 53-25 204.5T406 436H260q0-3-9-66.5T237 269q-4 18-15.5 77.5T204 436H58Q19 193 2 0"></svg:path>`,
})
export class PsWistsIcon {
  readonly viewBox = input("0 0 464 472")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
