import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenInfoStroke16Icon],svg[garden-info-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke="currentColor"><svg:circle cx="7.5" cy="8.5" r="7" fill="none"></svg:circle><svg:path fill="currentColor" stroke-linecap="round" d="M7.5 12.5V8"></svg:path></svg:g><svg:circle cx="7.5" cy="5" r="1" fill="currentColor"></svg:circle>`,
})
export class GardenInfoStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
