import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaterEnergyIcon],svg[hugeicons-water-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.253 19.917A9.5 9.5 0 0 0 9.89 2.736m7.364 17.18V17m0 2.917H20.5M6.722 4.1a9.5 9.5 0 0 0 7.389 17.165M6.722 4.1V7m0-2.9H3.5"></svg:path><svg:path d="M12 16a3.5 3.5 0 0 0 3.5-3.5C15.5 10 12 7 12 7s-3.5 3-3.5 5.5A3.5 3.5 0 0 0 12 16"></svg:path></svg:g>`,
})
export class HugeiconsWaterEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
