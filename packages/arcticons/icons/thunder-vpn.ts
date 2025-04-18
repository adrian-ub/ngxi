import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThunderVpnIcon],svg[arcticons-thunder-vpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.979 43.5l16.874-21.522H23.805l4.482-9.244h9.548L41.944 4.5H10.165l-4.109 8.234h12.983c-2.485 5.004-4.977 10.004-7.555 14.968l9.888-.067z"></svg:path>`,
})
export class ArcticonsThunderVpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
