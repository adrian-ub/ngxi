import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAlwaysonIcon],svg[arcticons-alwayson-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.286 43.5H14.714a2.457 2.457 0 0 1-2.457-2.457V6.957c0-1.357 1.1-2.457 2.457-2.457h18.572c1.357 0 2.457 1.1 2.457 2.457v34.085c0 1.358-1.1 2.458-2.457 2.458m2.454-5.772H12.26m23.48-27.456H12.26M30.238 21.03H17.762m0-3.919h12.476"></svg:path>`,
})
export class ArcticonsAlwaysonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
