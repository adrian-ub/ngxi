import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIpvanishIcon],svg[arcticons-ipvanish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.22 27.81h.28V43.5h0h-6.28h0v-9.69a6 6 0 0 1 6-6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.49 14.9v6.27h6.09a3.32 3.32 0 0 1 3.32 3.32h0a3.31 3.31 0 0 1-3.32 3.32h-6.09v6.28h6.09a9.6 9.6 0 0 0 9.6-9.6h0a9.59 9.59 0 0 0-9.6-9.59Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.22 14.9h6.28v6.28h-6.28zm-6.26-6.27h3.53v3.53h-3.53zM7.82 4.5h2.19v2.19H7.82zm4.81 0h2.19v2.19h-2.19zM7.82 9.31h2.19v2.19H7.82zm4.14 5.59h3.53v3.53h-3.53zm6.26-6.27h3.53v3.53h-3.53z"></svg:path>`,
})
export class ArcticonsIpvanishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
