import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetrodroidIcon],svg[arcticons-metrodroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 8.4h-31a4 4 0 0 0-4 4v23.2a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4V12.4a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.999 21.754l2.925 3.12c.25.221.274.603.053.853l-.005.005l-2.925 3.12M7.872 29.883V16.108l6.875 13.79l6.875-13.769v13.769m10.261-13.762V29.87"></svg:path><svg:rect width="6.867" height="9.134" x="25.016" y="20.736" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.433" ry="3.433"></svg:rect>`,
})
export class ArcticonsMetrodroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
