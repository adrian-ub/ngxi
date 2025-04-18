import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRestaurantFillIcon],svg[ri-restaurant-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2v20h-2v-8h-3V7a5 5 0 0 1 5-5M9 13.9V22H7v-8.1A5 5 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5 5 0 0 1-4 4.9"></svg:path>`,
})
export class RiRestaurantFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
