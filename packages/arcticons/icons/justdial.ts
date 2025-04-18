import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJustdialIcon],svg[arcticons-justdial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.6 15.9v12.15a4.05 4.05 0 0 1-4.05 4.05h0a4.05 4.05 0 0 1-4.05-4.05v-1.345m21-1.287a4.05 4.05 0 0 0-4.05-4.05h0a4.05 4.05 0 0 0-4.05 4.05v2.632a4.05 4.05 0 0 0 4.05 4.05h0a4.05 4.05 0 0 0 4.05-4.05m0 4.051V15.899"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsJustdialIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
