import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuarkBrowserIcon],svg[arcticons-quark-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36 24c0 .878-.284 4.274-1.127 4.283c-7.274.07-7.959-.899-8.983 6.588C25.751 35.885 25.072 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12s12 5.373 12 12"></svg:path>`,
})
export class ArcticonsQuarkBrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
