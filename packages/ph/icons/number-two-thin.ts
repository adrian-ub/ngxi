import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberTwoThinIcon],svg[ph-number-two-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 208a4 4 0 0 1-4 4H88a4 4 0 0 1-3.2-6.4l71.94-95.92a36 36 0 1 0-57.49-43.34A36.6 36.6 0 0 0 95 73.61a4 4 0 0 1-7.33-3.21a44.4 44.4 0 0 1 5.2-8.87a44 44 0 0 1 70.28 53L96 204h72a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhNumberTwoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
