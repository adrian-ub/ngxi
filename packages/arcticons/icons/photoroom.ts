import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhotoroomIcon],svg[arcticons-photoroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.886 42.5a4.144 4.144 0 0 1-4.145-4.145V25.836a4.144 4.144 0 0 1 4.145-4.145h16.08c2.177 0 3.949-1.771 3.949-3.95s-1.772-3.951-3.95-3.951H11.887a4.144 4.144 0 1 1 0-8.29h16.08c6.749 0 12.239 5.492 12.239 12.24s-5.49 12.241-12.24 12.241H16.032v8.374a4.144 4.144 0 0 1-4.145 4.145m5.275-20.809l-8.355-9.27"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.383 28.16l6.456 7.42a4.146 4.146 0 0 1-6.158 5.55L24.633 29.981M21.88 13.79l6.814 7.831"></svg:path>`,
})
export class ArcticonsPhotoroomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
