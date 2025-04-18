import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilMobileAndroidIcon],svg[uil-mobile-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.71 16.29l-.15-.12a.8.8 0 0 0-.18-.09L12.2 16a1 1 0 0 0-.91.27a1.2 1.2 0 0 0-.21.33a1 1 0 0 0 1.3 1.31a1.5 1.5 0 0 0 .33-.22a1 1 0 0 0 .21-1.09a1 1 0 0 0-.21-.31M16 2H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilMobileAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
