import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7DevicePhonePortraitIcon],svg[f7-device-phone-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38 2a4 4 0 0 1 4 4v44a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-1 7H19a1 1 0 0 0-1 1v39a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1m-4 37a1 1 0 0 1 0 2H23a1 1 0 0 1 0-2zM31.5 5h-5a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1m-7 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path>`,
})
export class F7DevicePhonePortraitIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
