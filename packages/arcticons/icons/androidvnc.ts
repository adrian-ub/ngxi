import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAndroidvncIcon],svg[arcticons-androidvnc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.695 30.133V17.867l8.125 12.266V17.867m-11.194 0l-4.063 12.266L8.5 17.867m31 8.153v.05a4.063 4.063 0 0 1-4.063 4.063h0a4.063 4.063 0 0 1-4.063-4.063v-4.14a4.063 4.063 0 0 1 4.063-4.063h0A4.063 4.063 0 0 1 39.5 21.93v.05"></svg:path>`,
})
export class ArcticonsAndroidvncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
