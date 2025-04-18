import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDecimalFill12Icon],svg[garden-decimal-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="7.5" cy="6" fill="none" stroke="currentColor" stroke-width="2" rx="3.5" ry="5"></svg:ellipse><svg:circle cx="1.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class GardenDecimalFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
