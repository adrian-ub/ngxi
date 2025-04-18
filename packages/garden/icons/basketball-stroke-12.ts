import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBasketballStroke12Icon],svg[garden-basketball-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6 11.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11zM2 10l8-8m0 8L2 2M5.5.522V1A4.5 4.5 0 0 1 1 5.5H.522M6.5 11.478V11A4.5 4.5 0 0 1 11 6.5h.478"></svg:path>`,
})
export class GardenBasketballStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
