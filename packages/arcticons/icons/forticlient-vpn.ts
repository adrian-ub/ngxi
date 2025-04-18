import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsForticlientVpnIcon],svg[arcticons-forticlient-vpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.723 18.756h12.555v10.206H17.723z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c4.09-.891 15.875-8.424 15.875-17.86V7.74S35.34 4.5 24 4.5S8.125 7.74 8.125 7.74v17.9C8.125 35.076 19.91 42.61 24 43.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.01 18.756v-1.64a3.99 3.99 0 0 1 7.98 0v1.64"></svg:path>`,
})
export class ArcticonsForticlientVpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
