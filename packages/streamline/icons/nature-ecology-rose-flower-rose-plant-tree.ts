import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyRoseFlowerRosePlantTreeIcon],svg[streamline-nature-ecology-rose-flower-rose-plant-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 4.1a8.62 8.62 0 0 1 5.5-1.6V6a5.5 5.5 0 0 1-11 0V2.5s6.56-.79 9.56 7.21"></svg:path><svg:path d="M9.91 2.76a3 3 0 0 0-5.82 0M7 11.5v2"></svg:path></svg:g>`,
})
export class StreamlineNatureEcologyRoseFlowerRosePlantTreeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
