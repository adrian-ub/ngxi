import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteGlassWaterDropletOutlineIcon],svg[flowbite-glass-water-droplet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17h10M6 3l1.076 16.133A2 2 0 0 0 9.07 21h5.858a2 2 0 0 0 1.995-1.867L18 3zm8 8a2 2 0 1 1-4 0c0-1.105 1.791-4 2-4s2 2.895 2 4"></svg:path>`,
})
export class FlowbiteGlassWaterDropletOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
