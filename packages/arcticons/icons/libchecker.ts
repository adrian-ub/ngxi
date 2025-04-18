import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLibcheckerIcon],svg[arcticons-libchecker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="27" height="27" x="10.5" y="10.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.603"></svg:rect><svg:rect width="11" height="11" x="18.5" y="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.69"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.3 5.5h3.4v5h-3.4zm6 0h3.4v5h-3.4zm-12 0h3.4v5h-3.4zm6 32h3.4v5h-3.4zm6 0h3.4v5h-3.4zm-12 0h3.4v5h-3.4zm21.2-15.2h5v3.4h-5zm0 6h5v3.4h-5zm0-12h5v3.4h-5zm-32 6h5v3.4h-5zm0 6h5v3.4h-5zm0-12h5v3.4h-5z"></svg:path>`,
})
export class ArcticonsLibcheckerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
