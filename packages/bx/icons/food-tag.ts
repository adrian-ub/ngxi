import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFoodTagIcon],svg[bx-food-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 16H5V5h14z"></svg:path><svg:circle cx="12" cy="12" r="5" fill="currentColor"></svg:circle>`,
})
export class BxFoodTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
