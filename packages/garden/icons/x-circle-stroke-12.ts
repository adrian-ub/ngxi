import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenXCircleStroke12Icon],svg[garden-x-circle-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke="currentColor"><svg:circle cx="5.5" cy="6.5" r="5" fill="none"></svg:circle><svg:path fill="currentColor" stroke-linecap="round" d="m3.5 8.5l4-4m0 4l-4-4"></svg:path></svg:g>`,
})
export class GardenXCircleStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
