import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7DevicePhoneLandscapeIcon],svg[f7-device-phone-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50 14a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4zm-1 4H10a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h39a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1M33 34a1 1 0 0 1 0 2H23a1 1 0 0 1 0-2zM5.5 31a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m0-7a.5.5 0 0 0-.5.5v5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class F7DevicePhoneLandscapeIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
