import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhYIcon],svg[whh-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 67v701q0 106-75 181t-181 75H192q-27 0-45.5-19T128 960t18.5-45t45.5-19h320q53 0 90.5-37.5T640 768V605q-60 35-128 35H256q-106 0-181-75T0 384V64q0-26 18.5-45t45-19T109 19t19 45v320q0 53 37.5 90.5T256 512h256q53 0 90.5-37.5T640 384V64q0-26 18.5-45t45-19T749 19t19 45z"></svg:path>`,
})
export class WhhYIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
