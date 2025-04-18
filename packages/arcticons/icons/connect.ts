import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsConnectIcon],svg[arcticons-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.07 31.07c-3.91 3.91-10.24 3.91-14.14 0c-3.91-3.91-3.91-10.24 0-14.14c3.91-3.91 10.24-3.91 14.14 0"></svg:path>`,
})
export class ArcticonsConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
