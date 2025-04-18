import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUtmIcon],svg[arcticons-utm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:rect width="26.429" height="26.429" x="10.786" y="10.786" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.548" ry="3.548"></svg:rect><svg:rect width="15.857" height="15.857" x="16.071" y="16.071" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.095" ry="3.095"></svg:rect><svg:circle cx="24" cy="24" r="2.643" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsUtmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
