import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagMauritiusIcon],svg[twemoji-flag-mauritius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EA2839" d="M32 5H4a4 4 0 0 0-4 4v2.5h36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#1A206D" d="M0 11.5h36V18H0z"></svg:path><svg:path fill="#FFD500" d="M0 18h36v6.5H0z"></svg:path><svg:path fill="#00A551" d="M0 24.5V27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-2.5z"></svg:path>`,
})
export class TwemojiFlagMauritiusIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
