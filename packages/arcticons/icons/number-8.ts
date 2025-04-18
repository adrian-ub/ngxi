import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNumber8Icon],svg[arcticons-number-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.7 24a4 4 0 0 0-4 4h0a4 4 0 0 0 4 4h2.6a4 4 0 0 0 4-4h0a4 4 0 0 0-4-4m0 0a4 4 0 0 0 4-4h0a4 4 0 0 0-4-4h-2.6a4 4 0 0 0-4 4h0a4 4 0 0 0 4 4m0 0h2.6"></svg:path>`,
})
export class ArcticonsNumber8Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
