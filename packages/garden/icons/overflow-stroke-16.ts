import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenOverflowStroke16Icon],svg[garden-overflow-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="2.5" cy="8" r="1.5"></svg:circle><svg:circle cx="8" cy="8" r="1.5"></svg:circle><svg:circle cx="13.5" cy="8" r="1.5"></svg:circle></svg:g>`,
})
export class GardenOverflowStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
