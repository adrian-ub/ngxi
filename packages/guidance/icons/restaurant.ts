import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceRestaurantIcon],svg[guidance-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M15.5 24V.5h.5A4.5 4.5 0 0 1 20.5 5v9.5H20a2.5 2.5 0 0 0-2.5 2.5M7 24V9.5m0 0A3.5 3.5 0 0 0 10.5 6V0M7 9.5A3.5 3.5 0 0 1 3.5 6V0M7 0v7.5"></svg:path>`,
})
export class GuidanceRestaurantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
