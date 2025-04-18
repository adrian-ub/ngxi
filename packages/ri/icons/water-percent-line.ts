import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWaterPercentLineIcon],svg[ri-water-percent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.05 8.047L12 3.097l4.95 4.95a7 7 0 1 1-9.9 0m11.314-1.414L12 .269L5.636 6.633a9 9 0 1 0 12.728 0m-2.121 3.538l-1.414-1.414l-7.072 7.071l1.415 1.415zM8.11 11.232a1.5 1.5 0 1 0 2.121-2.121a1.5 1.5 0 0 0-2.121 2.121m7.778 5.657a1.5 1.5 0 1 1-2.121-2.121a1.5 1.5 0 0 1 2.121 2.12"></svg:path>`,
})
export class RiWaterPercentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
