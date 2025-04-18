import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTwocolumnsleftIcon],svg[whh-twocolumnsleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 1024h-192q-26 0-45-19t-19-45V64q0-26 19-45t45-19h192q26 0 45 19t19 45v896q0 26-18.5 45t-45.5 19m-448 0h-384q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h384q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-864q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhTwocolumnsleftIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
