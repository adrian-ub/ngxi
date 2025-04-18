import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOmwIcon],svg[arcticons-omw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="37.04" cy="13.8" r=".75" fill="currentColor"></svg:circle><svg:circle cx="40.64" cy="13.8" r=".72" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.3 39.1H14l.9-2.3H9.4Zm23.7 0h3.7l.9-2.3H33Z"></svg:path><svg:circle cx="37.04" cy="17.4" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.04" cy="21.1" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.04" cy="24.7" r=".72" fill="currentColor"></svg:circle><svg:circle cx="40.64" cy="17.4" r=".71" fill="currentColor"></svg:circle><svg:circle cx="40.64" cy="21" r=".71" fill="currentColor"></svg:circle><svg:circle cx="40.64" cy="24.6" r=".71" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.56 12.8V17l-2 2.8v6.3l2 2.3v4.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.2 12.8h26.2v19.9H8.2zm28.59 17h4.1v3h-4.1z"></svg:path><svg:rect width="39" height="27.9" x="4.5" y="8.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect>`,
})
export class ArcticonsOmwIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
