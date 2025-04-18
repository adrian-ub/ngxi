import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWaterPercentFillIcon],svg[ri-water-percent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .269L5.636 6.633a9 9 0 1 0 12.728 0zm4.243 9.902l-7.071 7.072l-1.415-1.415l7.072-7.07zM8.11 9.111a1.5 1.5 0 1 1 2.121 2.121A1.5 1.5 0 0 1 8.11 9.111m7.778 7.778a1.5 1.5 0 1 1-2.121-2.121a1.5 1.5 0 0 1 2.121 2.12"></svg:path>`,
})
export class RiWaterPercentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
