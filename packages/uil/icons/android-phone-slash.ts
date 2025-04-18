import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAndroidPhoneSlashIcon],svg[uil-android-phone-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.29 17.71a1 1 0 0 0 1.42 0a1.2 1.2 0 0 0 .21-.33a.94.94 0 0 0 0-.76a1.2 1.2 0 0 0-.21-.33a1 1 0 0 0-1.42 0a1.2 1.2 0 0 0-.21.33a.94.94 0 0 0 0 .76a1.2 1.2 0 0 0 .21.33M8.66 4H16a1 1 0 0 1 1 1v7.34a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3H8.66a1 1 0 0 0 0 2m13.05 16.29l-18-18a1 1 0 0 0-1.42 1.42L5 6.41V19a3 3 0 0 0 3 3h8a3 3 0 0 0 2.76-1.83l1.53 1.54a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M17 19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8.41l10 10Z"></svg:path>`,
})
export class UilAndroidPhoneSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
