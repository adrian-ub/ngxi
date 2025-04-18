import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHktweaksIcon],svg[arcticons-hktweaks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.85 5.615c-5.768 7.102-6.17 14.683-3.416 22.465c-3.47 3.013-7.16 6.026-9.138 10.17"></svg:path><svg:circle cx="24.028" cy="40.186" r="2.317" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.15 5.5c7.095 7.745 4.575 15.104 3.584 22.523c3.369 2.841 6.723 5.706 9.158 10.146"></svg:path>`,
})
export class ArcticonsHktweaksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
