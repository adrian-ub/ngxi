import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteGlassWaterOutlineIcon],svg[flowbite-glass-water-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.315 7c1.419 0 1.419 1.5 2.837 1.5S10.571 7 11.99 7s1.419 1.5 2.837 1.5S17.663 7 17.663 7M6 3l1.076 16.133A2 2 0 0 0 9.07 21h5.858a2 2 0 0 0 1.995-1.867L18 3z"></svg:path>`,
})
export class FlowbiteGlassWaterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
