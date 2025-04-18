import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiIcon],svg[zmdi-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249 394l-1 1v-1L0 85Q113 0 248.5 0T497 85zM68 170q82-63 180.5-63T429 170L249 394l-1 1v-1z"></svg:path>`,
})
export class ZmdiWifiIcon {
  readonly viewBox = input("0 0 504 400")
  readonly width = input("1.26em")
  readonly height = input("1em")
}
