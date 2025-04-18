import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBasketballStroke16Icon],svg[garden-basketball-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 15.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15zm-.5 0V15A7.5 7.5 0 0 1 15 7.5h.5m-7-7V1A7.5 7.5 0 0 1 1 8.5H.5M3 13L13 3m0 10L3 3"></svg:path>`,
})
export class GardenBasketballStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
