import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEndelIcon],svg[arcticons-endel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.7 22.6h13.6c3.2 0 4.9-2.4 3.3-5.3c-1-1.9-1-4.1-1-4.1c0-2.9 2.4-5.2 5.3-5.2h.2c2.9 0 5.3 2.4 5.3 5.3h0s.5 2.3-5.4 10.8c-5.3 7.5-5.4 10.7-5.4 10.7h0c0 2.9 2.4 5.3 5.3 5.3h.2c2.9 0 5.3-2.3 5.3-5.2h0s0-2.2-.9-4.1c-1.3-2.5.4-5.1 3.3-5.1h13.6"></svg:path>`,
})
export class ArcticonsEndelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
