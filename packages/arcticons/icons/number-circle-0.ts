import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNumberCircle0Icon],svg[arcticons-number-circle-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsNumberCircle00" d="m28.046 17.884l-8.104 12.232"></svg:path></svg:defs><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:use href="#arcticonsNumberCircle00"></svg:use><svg:rect width="10.6" height="16" x="18.7" y="16" rx="5.3" ry="5.3"></svg:rect><svg:use href="#arcticonsNumberCircle00"></svg:use><svg:rect width="10.6" height="16" x="18.7" y="16" rx="5.3" ry="5.3"></svg:rect></svg:g>`,
})
export class ArcticonsNumberCircle0Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
