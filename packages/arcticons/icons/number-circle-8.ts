import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNumberCircle8Icon],svg[arcticons-number-circle-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.7 24a4 4 0 0 0-4 4h0a4 4 0 0 0 4 4h2.6a4 4 0 0 0 4-4h0a4 4 0 0 0-4-4m0 0a4 4 0 0 0 4-4h0a4 4 0 0 0-4-4h-2.6a4 4 0 0 0-4 4h0a4 4 0 0 0 4 4m0 0h2.6"></svg:path>`,
})
export class ArcticonsNumberCircle8Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
