import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCenterFill12Icon],svg[garden-center-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11a1 1 0 0 0 0-2H2a1 1 0 1 0 0 2zM8 3H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M2 0a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2z"></svg:path>`,
})
export class GardenCenterFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
