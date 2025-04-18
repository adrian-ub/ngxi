import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAlignCenterStroke16Icon],svg[garden-align-center-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M1.5 1.5h13m-11 4h9m-11 4h13m-11 4h9"></svg:path>`,
})
export class GardenAlignCenterStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
