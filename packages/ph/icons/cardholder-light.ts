import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCardholderLightIcon],svg[ph-cardholder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 50H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V72a22 22 0 0 0-22-22M38 94h180v20h-58a6 6 0 0 0-6 6a26 26 0 0 1-52 0a6 6 0 0 0-6-6H38Zm10-32h160a10 10 0 0 1 10 10v10H38V72a10 10 0 0 1 10-10m160 132H48a10 10 0 0 1-10-10v-58h52.47a38 38 0 0 0 75.06 0H218v58a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhCardholderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
