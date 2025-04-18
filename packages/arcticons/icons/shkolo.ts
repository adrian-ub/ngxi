import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShkoloIcon],svg[arcticons-shkolo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 35H38a5.5 5.5 0 0 0 5.5-5.5h0A5.5 5.5 0 0 0 38 24H10a5.5 5.5 0 0 1-5.5-5.5h0A5.5 5.5 0 0 1 10 13h32.5"></svg:path>`,
})
export class ArcticonsShkoloIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
