import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiAltIcon],svg[zmdi-wifi-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128q64-64 149.5-86.5t171 0T469 128l-42 43q-80-80-192.5-80T43 171zm171 171q26-27 63.5-27t64.5 27l-64 64zm-86-86q62-61 149.5-61T384 213l-43 43q-44-44-106.5-44T128 256z"></svg:path>`,
})
export class ZmdiWifiAltIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
