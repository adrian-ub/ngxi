import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLtecleanerIcon],svg[arcticons-ltecleaner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.76 22.8V15a2 2 0 0 0-2-2h-9.82V5.46a1 1 0 0 0-1-1H24a3.93 3.93 0 0 0-3.94 3.94h0v4.64h-9.85a2 2 0 0 0-2 2v7.76Zm-31.52 0v19.7a1 1 0 0 0 1 1h1.64a8.08 8.08 0 0 0 7.88-7.88v6.9a1 1 0 0 0 1 1h1.63a7.88 7.88 0 0 0 7.88-7.88v6.9a1 1 0 0 0 1 1h1.65a7.88 7.88 0 0 0 7.88-7.88V22.8Zm10.51 12.8V22.8m10.5 12.8V22.8"></svg:path>`,
})
export class ArcticonsLtecleanerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
