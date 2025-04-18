import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWifiSecureIcon],svg[carbon-wifi-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20v-3a4 4 0 0 0-8 0v3a2.003 2.003 0 0 0-2 2v6a2.003 2.003 0 0 0 2 2h8a2.003 2.003 0 0 0 2-2v-6a2.003 2.003 0 0 0-2-2m-6-3a2 2 0 0 1 4 0v3h-4zm-2 11v-6h8v6zM6.105 7.105l1.414 1.414a11.98 11.98 0 0 1 16.962 0l1.414-1.414a13.98 13.98 0 0 0-19.79 0"></svg:path><svg:path fill="currentColor" d="M16 8a8.97 8.97 0 0 0-6.36 2.64l1.412 1.413a6.99 6.99 0 0 1 9.895 0l1.414-1.414A8.97 8.97 0 0 0 16 8"></svg:path>`,
})
export class CarbonWifiSecureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
