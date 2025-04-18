import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDecimalFill16Icon],svg[garden-decimal-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="9.5" cy="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" rx="5.5" ry="7"></svg:ellipse><svg:circle cx="1.5" cy="14.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class GardenDecimalFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
