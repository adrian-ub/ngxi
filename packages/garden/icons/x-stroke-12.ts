import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenXStroke12Icon],svg[garden-x-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="m3 9l6-6m0 6L3 3"></svg:path>`,
})
export class GardenXStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
