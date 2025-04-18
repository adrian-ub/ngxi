import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsPylonIcon],svg[zondicons-pylon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 18H20v2H0v-2h2.6L8 0h4zm-3.2-4H5.8l-1.2 4h10.8zm-2.4-8H8.2L7 10h6z"></svg:path>`,
})
export class ZondiconsPylonIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
