import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInputbridgeIcon],svg[arcticons-inputbridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.354 24h-9.009m9.01 0c3.014 0 5.457 2.352 5.457 5.249c0 2.9-2.446 5.251-5.458 5.251h-9.009v-21h9.01c3.014 0 5.457 2.352 5.457 5.252c0 2.896-2.446 5.248-5.458 5.248M14.187 13.5v21"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsInputbridgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
