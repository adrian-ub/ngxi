import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFullWidthFill12Icon],svg[garden-full-width-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11a1 1 0 0 0 0-2H2a1 1 0 1 0 0 2zm0-8H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M2 0a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2z"></svg:path>`,
})
export class GardenFullWidthFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
