import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNokiaWirelessIcon],svg[arcticons-nokia-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.5 11c7.18 0 13 5.82 13 13s-5.82 13-13 13zm-13 0c7.18 0 13 5.82 13 13s-5.82 13-13 13zm-13 0c7.18 0 13 5.82 13 13s-5.82 13-13 13z"></svg:path>`,
})
export class ArcticonsNokiaWirelessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
