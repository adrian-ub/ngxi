import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyTree1TreePlantPineTriangleParkIcon],svg[streamline-nature-ecology-tree-1-tree-plant-pine-triangle-park-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.57 7.84a2 2 0 0 1-.26 1.82a2 2 0 0 1-1.63.84H4.32a2 2 0 0 1-1.63-.84a2 2 0 0 1-.26-1.82l1.91-5.45a2.82 2.82 0 0 1 5.32 0Z"></svg:path><svg:path d="M5.5 6.5L7 8v5.5M7 8l1.5-1.5"></svg:path></svg:g>`,
})
export class StreamlineNatureEcologyTree1TreePlantPineTriangleParkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
