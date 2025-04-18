import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRtlNieuwsIcon],svg[arcticons-rtl-nieuws-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 28.869v-8.286c0-.762.618-1.38 1.381-1.38h6.905m14.428-.001v8.286c0 .763.619 1.381 1.381 1.381H39.5M19.857 17.131v10.357a1.38 1.38 0 0 0 1.381 1.381h6.905m-8.286-9.667h8.286"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsRtlNieuwsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
