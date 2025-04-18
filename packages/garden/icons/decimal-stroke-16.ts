import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDecimalStroke16Icon],svg[garden-decimal-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="8.8" cy="8.5" fill="none" stroke="currentColor" rx="5.2" ry="7"></svg:ellipse><svg:circle cx="2" cy="15" r="1" fill="currentColor"></svg:circle>`,
})
export class GardenDecimalStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
