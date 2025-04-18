import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusifyIcon],svg[arcticons-musify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.752 25.316V13.758m-2.64 14.2a8.737 8.737 0 1 0 9.09 9.28l.023-.356q-.185.008-.37.008a8.737 8.737 0 0 1-8.737-8.738h0v-.043Zm2.635-2.743c0 5.768 2.996 8.356 6.622 8.356l-.004-.287l-.102-20.262l7.07 3.74M23.76 13.6a7.223 7.223 0 0 1 14.445.047h0a7.2 7.2 0 0 1-.663 3.022"></svg:path>`,
})
export class ArcticonsMusifyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
