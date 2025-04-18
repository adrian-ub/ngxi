import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZapmapIcon],svg[arcticons-zapmap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.11 7.303a15.5 15.5 0 0 1 23.862 16.71C36.096 34.744 24 43.5 24 43.5S11.904 34.744 9.028 24.012a15.5 15.5 0 0 1 6.081-16.709z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.302 39.487L31 23.5H17L30.015 5.714"></svg:path>`,
})
export class ArcticonsZapmapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
