import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMaterialisticIcon],svg[arcticons-materialistic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="31.2" x="4.5" y="8.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.236 16.543l1.714-2.967l1.713 2.967m.001 2.403l-1.714 2.969l-1.714-2.969m0 10.088l1.714-2.967l1.713 2.967m.001 2.403l-1.714 2.969l-1.714-2.969m7.687-17.861h21.11m-.001 4.169H21.648m3.725 4.17h13.66m-21.11 4.17h21.11m-.001 4.17H21.648m3.725 4.169h13.66"></svg:path>`,
})
export class ArcticonsMaterialisticIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
