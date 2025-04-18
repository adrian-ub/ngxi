import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNrfConnectIcon],svg[arcticons-nrf-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.712 10.803c5.4-10.482 17.114-.999 15.665 5.918c-1.253 5.978-3.785 12.004-9.59 16.633c-5.065 4.04-19.144.13-11.125-14.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.234 36.738c-7.122 11.738-18.053.587-16.603-6.33c1.252-5.978 3.785-12.004 9.59-16.633c5.065-4.04 18.647 1.734 10.844 15.852"></svg:path>`,
})
export class ArcticonsNrfConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
