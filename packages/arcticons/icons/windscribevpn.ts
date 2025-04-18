import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWindscribevpnIcon],svg[arcticons-windscribevpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 44.5l-14.5-6l-6-14.5l6-14.5l14.5-6l14.5 6l6 14.5l-6 14.5Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.82 14.48V33.7h3.07a3.43 3.43 0 0 0 2.2-1h0L24 27.34l5.9 5.38h0a3.52 3.52 0 0 0 2.21 1h3.07V14.48"></svg:path>`,
})
export class ArcticonsWindscribevpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
