import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenXCircleStroke16Icon],svg[garden-x-circle-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="7.5" cy="8.5" r="7"></svg:circle><svg:path stroke-linecap="round" d="m4.5 11.5l6-6m0 6l-6-6"></svg:path></svg:g>`,
})
export class GardenXCircleStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
