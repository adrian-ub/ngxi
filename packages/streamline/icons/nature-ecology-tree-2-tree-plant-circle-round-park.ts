import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyTree2TreePlantCircleRoundParkIcon],svg[streamline-nature-ecology-tree-2-tree-plant-circle-round-park-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 6.5L7 8v5.5M7 8l1.5-1.5"></svg:path><svg:circle cx="7" cy="6" r="5.5"></svg:circle></svg:g>`,
})
export class StreamlineNatureEcologyTree2TreePlantCircleRoundParkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
