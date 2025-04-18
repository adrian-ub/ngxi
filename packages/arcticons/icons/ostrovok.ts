import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOstrovokIcon],svg[arcticons-ostrovok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.28 14.248v13.03m1.716 4.75a1.72 1.72 0 0 1-1.716 1.724h0a1.72 1.72 0 0 1-1.723-1.717v-.007c0-.95.77-1.72 1.72-1.72A1.72 1.72 0 0 1 37 32.025v.003zm-6.733-7.979a9.63 9.63 0 0 1-9.63 9.63A9.63 9.63 0 0 1 11 24.053v-.004a9.63 9.63 0 0 1 9.63-9.63h0a9.63 9.63 0 0 1 9.629 9.63z"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsOstrovokIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
