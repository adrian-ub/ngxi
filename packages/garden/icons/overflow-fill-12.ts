import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenOverflowFill12Icon],svg[garden-overflow-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="1.5" cy="6" r="1.5"></svg:circle><svg:circle cx="10.5" cy="6" r="1.5"></svg:circle><svg:circle cx="6" cy="6" r="1.5"></svg:circle></svg:g>`,
})
export class GardenOverflowFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
