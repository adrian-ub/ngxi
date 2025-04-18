import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCenterFill16Icon],svg[garden-center-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zm9-10H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M2 3a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2z"></svg:path>`,
})
export class GardenCenterFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
