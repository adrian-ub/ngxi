import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSearchStroke12Icon],svg[garden-search-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4.5" cy="4.5" r="4" fill="none" stroke="currentColor"></svg:circle><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M11 11L7.5 7.5"></svg:path>`,
})
export class GardenSearchStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
