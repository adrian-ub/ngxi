import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBarcodeIcon],svg[arcticons-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="4.327" height="23.115" x="12.615" y="12.443" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".665" ry=".665"></svg:rect><svg:rect width="3.616" height="23.115" x="24.718" y="12.443" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".665" ry=".665"></svg:rect><svg:rect width="4.327" height="23.115" x="36.111" y="12.443" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".665" ry=".665"></svg:rect><svg:rect width="39" height="31" x="4.5" y="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.904 12.443v23.114m11.748-23.114v23.114M32.4 12.443v23.114"></svg:path>`,
})
export class ArcticonsBarcodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
