import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNetgearNighthawkIcon],svg[arcticons-netgear-nighthawk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 17.307c8.836-8.026 26.72-11.58 39 1.091L24.177 37.936"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.906 24.396c8.742-7.525 19.991-5.824 26.513.94m-19.423 6.192c4.482-4.02 9.279-2.995 12.93.491"></svg:path>`,
})
export class ArcticonsNetgearNighthawkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
