import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFlipboardIcon],svg[whh-flipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M927.998 320h-288v288q0 13-9.5 22.5t-22.5 9.5h-288v288q0 13-9.5 22.5t-22.5 9.5h-256q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h896q13 0 22.5 9.5t9.5 22.5v256q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhFlipboardIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}
