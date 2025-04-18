import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSearchStroke16Icon],svg[garden-search-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor"></svg:circle><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="m15 15l-5-5"></svg:path>`,
})
export class GardenSearchStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
