import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsForcepointVpnIcon],svg[arcticons-forcepoint-vpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.556 5.5h32.889v8.222H15.777V42.5H7.556z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 21.944V42.5l12.333-10.278z"></svg:path>`,
})
export class ArcticonsForcepointVpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
