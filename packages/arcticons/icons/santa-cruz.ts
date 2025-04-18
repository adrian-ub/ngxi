import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSantaCruzIcon],svg[arcticons-santa-cruz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.872 36.059l.497.743l-10.02 6.698l-3.867-5.786M15.834 12.01l-.542-.811h0L25.312 4.5l3.8 5.684m-19.76 14.11c0-3.715 1.622-7.766 3.852-10.19s5.806-3.919 9.223-3.92H32.9l8.214 13.32h-2.467c0 3.714-1.622 7.865-3.852 10.29c-2.23 2.423-5.806 3.918-9.223 3.919H15.1L6.885 24.294h16.797c.868-1.09 1.107-.79 2.868-.79h12.098"></svg:path>`,
})
export class ArcticonsSantaCruzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
