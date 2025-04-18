import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRemoteControlAltIcon],svg[zmdi-remote-control-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59 135q44-44 106.5-44T272 135l-31 30q-31-31-75.5-31T89 165zM165.5 5Q262 5 331 74l-30 30q-56-56-135.5-56T30 104L0 74Q69 5 165.5 5M226 198q10 0 17.5 7t6.5 17v207q0 10-7 17t-17 7H104q-10 0-17-7t-7-17V222q0-10 7-17.5t17-7.5zm3 213V240H101v171z"></svg:path>`,
})
export class ZmdiRemoteControlAltIcon {
  readonly viewBox = input("0 0 336 456")
  readonly width = input("0.74em")
  readonly height = input("1em")
}
