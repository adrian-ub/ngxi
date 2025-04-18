import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRaveIcon],svg[arcticons-rave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.791 28.976l-3.756-9.952l-3.755 9.952m15.783-9.952l-3.756 9.952l-3.755-9.952zM8.5 22.78a3.756 3.756 0 0 1 3.756-3.756h0m-3.756 0v9.952m30.508-1.895a3.75 3.75 0 0 1-3.264 1.895h0a3.756 3.756 0 0 1-3.756-3.755v-2.442a3.756 3.756 0 0 1 3.756-3.756h0A3.756 3.756 0 0 1 39.5 22.78V24h-7.51"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path>`,
})
export class ArcticonsRaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
