import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLemuroidIcon],svg[arcticons-lemuroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="19.05" r="7.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="12" cy="19.05" r="7.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.2 27.25h1.7a4.59 4.59 0 0 1 4.6 4.6h0a4.59 4.59 0 0 1-4.6 4.6h-1.7a4.59 4.59 0 0 1-4.6-4.6h0a4.65 4.65 0 0 1 4.6-4.6"></svg:path><svg:circle cx="35.9" cy="16.35" r="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="35.9" cy="21.25" r="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.5" cy="18.85" r="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.4" cy="18.85" r="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" d="M10.7 15.15v2.4H8.2v2.7h2.5v2.4h2.5v-2.4h2.5v-2.7h-2.5v-2.4Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m24 33.85l2.9-3.3H21Z"></svg:path>`,
})
export class ArcticonsLemuroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
