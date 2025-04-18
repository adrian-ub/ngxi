import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKpnItvIcon],svg[arcticons-kpn-itv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.115 22.06l-11.704-6.757c-1.493-.861-3.359.216-3.359 1.94v13.515c0 1.723 1.866 2.8 3.359 1.939l11.704-6.758c1.493-.862 1.493-3.016 0-3.878"></svg:path>`,
})
export class ArcticonsKpnItvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
