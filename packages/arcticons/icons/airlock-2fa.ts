import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAirlock2faIcon],svg[arcticons-airlock-2fa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.996 15.681c2.896 1.917 4.628 5.096 4.628 8.493h0c0 5.68-4.756 10.287-10.624 10.287q-.837 0-1.665-.127m-4.397-1.714c-2.858-1.922-4.562-5.078-4.562-8.447c0-5.682 4.756-10.287 10.624-10.287q.861 0 1.71.134m4.164-4.634L32.479 3.5m-17.161 41l2.605-5.885"></svg:path>`,
})
export class ArcticonsAirlock2faIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
