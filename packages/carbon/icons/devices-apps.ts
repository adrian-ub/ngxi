import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDevicesAppsIcon],svg[carbon-devices-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4zm8 12H14v2h2v4h-2v2h9v-2h-5v-4h10a2 2 0 0 0 2-2v-6h-2zM6 6h12V4H6a2 2 0 0 0-2 2v6h2zm4 8H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m0 14H4V16h6z"></svg:path>`,
})
export class CarbonDevicesAppsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
