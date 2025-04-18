import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyPottedTree2TreePlantPotIcon],svg[streamline-nature-ecology-potted-tree-2-tree-plant-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.25 13.5h-4l-.5-4h5l-.5 4zm2.88-7.43a2 2 0 1 1-2.47-3.14c.86-.68 3.59-.28 3.59-.28S13 5.39 12.13 6.07Z"></svg:path><svg:path d="M9.25 5.64a5.5 5.5 0 0 0-2 3.86c0-3-1.5-5-4-6.5"></svg:path><svg:path d="M1.67 5a2.56 2.56 0 0 0 3.61-3.61C4.28.4.75.5.75.5S.67 4 1.67 5Z"></svg:path></svg:g>`,
})
export class StreamlineNatureEcologyPottedTree2TreePlantPotIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
