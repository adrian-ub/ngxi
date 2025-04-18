import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyPineTreePlantTreeFarmingChristmasNaturePlantsPineEnvironmentIcon],svg[streamline-nature-ecology-pine-tree-plant-tree-farming-christmas-nature-plants-pine-environment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 10.5H2l3.5-5H3l4-5l4 5H8.5l3.5 5zm-5 0v3"></svg:path>`,
})
export class StreamlineNatureEcologyPineTreePlantTreeFarmingChristmasNaturePlantsPineEnvironmentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
