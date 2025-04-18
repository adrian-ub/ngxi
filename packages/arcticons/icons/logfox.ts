import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLogfoxIcon],svg[arcticons-logfox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 13.933c3.356 0 6.181.618 6.181.618s2.694-4.636 9.184-9.051c0 0-1.369 12.848 3.047 24.637c0 0-11.524 4.15-18.412 12.363c-6.888-8.212-18.412-12.363-18.412-12.363C10.004 18.348 8.635 5.5 8.635 5.5c6.49 4.415 9.184 9.051 9.184 9.051s2.825-.618 6.181-.618"></svg:path>`,
})
export class ArcticonsLogfoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
