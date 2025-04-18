import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconCmakeIcon],svg[devicon-cmake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#064F8C" d="M62.8.4L.3 123.8l68.1-57.9z"></svg:path><svg:path fill="#249847" d="m123.8 127.7l-84-33.9L0 127.7z"></svg:path><svg:path fill="#BE2128" d="M128 126.6L65.6 2.5l9.2 102.6z"></svg:path><svg:path fill="#CDCDCE" d="m71.9 104l-3.1-34.9L42 92z"></svg:path>`,
})
export class DeviconCmakeIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
