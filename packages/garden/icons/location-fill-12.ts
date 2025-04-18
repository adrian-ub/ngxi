import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLocationFill12Icon],svg[garden-location-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0a4.88 4.88 0 0 0-5 4.76c0 1.77.8 2.69 1.82 4c.9 1.13 1.93 2.15 2.82 3.1a.48.48 0 0 0 .72 0c.9-1 2-2 2.81-3.1c.94-1.27 1.83-2.23 1.83-4A5.11 5.11 0 0 0 6 0m0 7a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class GardenLocationFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
