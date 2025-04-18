import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZenlessZoneZeroIcon],svg[arcticons-zenless-zone-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.798 6.39L32.93 5.5l.13 2.462l-20.05 31.086l.385 3.452l28.808-3.07"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.347 22.845l9.222-.455l.413 3.214l-7.954 15.122M20.752 5.899l-10.44 14.388l.46 3.426l12.529-.619"></svg:path>`,
})
export class ArcticonsZenlessZoneZeroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
