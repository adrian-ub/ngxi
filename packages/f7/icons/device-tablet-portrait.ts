import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7DeviceTabletPortraitIcon],svg[f7-device-tablet-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 2a4 4 0 0 1 4 4v44a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-1 7H13a1 1 0 0 0-1 1v39a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1M33 46a1 1 0 0 1 0 2H23a1 1 0 0 1 0-2zM30.5 5h-5a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1m-7 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path>`,
})
export class F7DeviceTabletPortraitIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
