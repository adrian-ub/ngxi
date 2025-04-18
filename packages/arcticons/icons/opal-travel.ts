import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpalTravelIcon],svg[arcticons-opal-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.544 16.577c-6.168 6.196-8.72 14.608-7.713 22.66c8.055.971 16.456-1.619 22.625-7.814c6.168-6.196 8.72-14.608 7.713-22.66c-8.055-.97-16.456 1.619-22.625 7.814"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.423 16.544c-6.196-6.168-14.608-8.72-22.66-7.713c-.971 8.055 1.619 16.456 7.814 22.625c6.195 6.168 14.608 8.72 22.66 7.713c.97-8.055-1.619-16.456-7.814-22.625"></svg:path>`,
})
export class ArcticonsOpalTravelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
