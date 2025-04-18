import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainCmakeIcon],svg[devicon-plain-cmake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62.8.4L.3 123.8l68.1-57.9zm61 127.3l-84-33.9L0 127.7zm4.2-1.1L65.6 2.5l9.2 102.6zM71.9 104l-3.1-34.9L42 92z"></svg:path>`,
})
export class DeviconPlainCmakeIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
