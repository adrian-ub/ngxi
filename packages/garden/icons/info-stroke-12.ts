import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenInfoStroke12Icon],svg[garden-info-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke="currentColor"><svg:circle cx="5.5" cy="6.5" r="5" fill="none"></svg:circle><svg:path fill="currentColor" stroke-linecap="round" d="M5.5 9.5v-3"></svg:path></svg:g><svg:circle cx="5.5" cy="4" r="1" fill="currentColor"></svg:circle>`,
})
export class GardenInfoStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
