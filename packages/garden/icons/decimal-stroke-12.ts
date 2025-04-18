import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDecimalStroke12Icon],svg[garden-decimal-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="7" cy="6.5" fill="none" stroke="currentColor" rx="3.5" ry="5"></svg:ellipse><svg:circle cx="2" cy="11" r="1" fill="currentColor"></svg:circle>`,
})
export class GardenDecimalStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
