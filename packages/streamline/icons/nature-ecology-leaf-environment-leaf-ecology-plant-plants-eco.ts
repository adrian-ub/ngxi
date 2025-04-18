import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyLeafEnvironmentLeafEcologyPlantPlantsEcoIcon],svg[streamline-nature-ecology-leaf-environment-leaf-ecology-plant-plants-eco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.51 5.38c2 2.82.47 6.05-.27 7.31a1.42 1.42 0 0 1-1 .66c-1.45.25-5.06.53-7-2.29C1.33 8.4 1.41 3.72 1.58 1.49A1.05 1.05 0 0 1 3 .55c2.15.62 6.63 2.17 8.51 4.83Z"></svg:path><svg:path d="M4.77 4.45a52.26 52.26 0 0 1 6 8.73"></svg:path></svg:g>`,
})
export class StreamlineNatureEcologyLeafEnvironmentLeafEcologyPlantPlantsEcoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
