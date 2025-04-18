import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoronacheckIcon],svg[arcticons-coronacheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 19.5v-14h-37v14a4.5 4.5 0 0 1 0 9v14h37v-14a4.5 4.5 0 0 1 0-9"></svg:path><svg:rect width="9" height="9" x="12.5" y="12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="9" height="9" x="12.5" y="26.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="9" height="9" x="26.5" y="12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.5 29.5h3v3h-3zm3-3h3v3h-3zm0 6h3v3h-3zm-6-6h3v3h-3zm0 6h3v3h-3z"></svg:path>`,
})
export class ArcticonsCoronacheckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
