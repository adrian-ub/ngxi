import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJrpn15cIcon],svg[arcticons-jrpn15c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="16.957" r="12.457"></svg:circle><svg:circle cx="29.098" cy="23.177" r="2.206"></svg:circle><svg:path d="m15.37 36.563l1.982-1.09V43.5m17.593-2.772a2.664 2.664 0 0 1-2.676 2.676h0c-1.486 0-2.676-1.19-2.676-2.577v-2.675c0-1.487 1.19-2.676 2.676-2.577h0a2.56 2.56 0 0 1 2.577 2.577h0m-13.702 4.555c.595.496 1.09.694 2.379.694h.198a2.2 2.2 0 0 0 2.18-2.18h0a2.2 2.2 0 0 0-2.18-2.18h-2.676v-3.469h4.856"></svg:path></svg:g>`,
})
export class ArcticonsJrpn15cIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
