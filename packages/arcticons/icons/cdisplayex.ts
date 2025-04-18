import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCdisplayexIcon],svg[arcticons-cdisplayex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.8 34.8a26 26 0 0 0 7.2.998c10.77 0 19.5-6.339 19.5-14.157S34.77 7.483 24 7.483S4.5 13.822 4.5 21.64c0 4.289 2.626 8.13 6.773 10.727c0 0-.058 3.873-3.657 8.15c6.154-1.043 9.183-5.716 9.183-5.716"></svg:path>`,
})
export class ArcticonsCdisplayexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
