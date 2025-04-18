import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyPottedTree1TreePlantPotIcon],svg[streamline-nature-ecology-potted-tree-1-tree-plant-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="4" r="3.5"></svg:circle><svg:path d="M7 5v4.5m2 4H5l-.5-4h5l-.5 4z"></svg:path></svg:g>`,
})
export class StreamlineNatureEcologyPottedTree1TreePlantPotIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
