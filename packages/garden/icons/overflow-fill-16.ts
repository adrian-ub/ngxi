import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenOverflowFill16Icon],svg[garden-overflow-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="2" cy="8" r="2"></svg:circle><svg:circle cx="8" cy="8" r="2"></svg:circle><svg:circle cx="14" cy="8" r="2"></svg:circle></svg:g>`,
})
export class GardenOverflowFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
