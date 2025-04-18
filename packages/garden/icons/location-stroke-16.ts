import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLocationStroke16Icon],svg[garden-location-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="8" cy="6.5" r="2"></svg:circle><svg:path stroke-linejoin="round" d="M8 .5a5.9 5.9 0 0 0-6 5.83c0 2.17 1 3.3 2.19 4.89s2.64 3 3.8 4.28c1.17-1.31 2.62-2.76 3.81-4.28S14 8.5 14 6.33A6.19 6.19 0 0 0 8 .5z"></svg:path></svg:g>`,
})
export class GardenLocationStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
