import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyLeafProtectEnvironmentLeafEcologyPlantPlantsEcoIcon],svg[streamline-nature-ecology-leaf-protect-environment-leaf-ecology-plant-plants-eco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.31 4.15c0-1 0-2-.07-2.66A1 1 0 0 0 9.89.55c-2.16.62-6.57 2.17-8.42 4.83c-2 2.82-.46 6.05.27 7.31a1.38 1.38 0 0 0 1 .66a9.36 9.36 0 0 0 2.79.08"></svg:path><svg:path d="M5 8.58a51.12 51.12 0 0 0-2.78 4.6m8.45.29h0a.5.5 0 0 1-.34 0h0A4.48 4.48 0 0 1 7.5 9.31V7.46A.47.47 0 0 1 8 7h5a.47.47 0 0 1 .46.46v1.85a4.48 4.48 0 0 1-2.79 4.16Z"></svg:path></svg:g>`,
})
export class StreamlineNatureEcologyLeafProtectEnvironmentLeafEcologyPlantPlantsEcoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
