import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneBatteryIcon],svg[emojione-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#3e4347"><svg:path d="M42 7c0 1.1-.9 2-2 2H24c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2z"></svg:path><svg:path d="M48 6H16c-2.2 0-4 1.8-4 4v48c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4m0 47c0 .5-.5 1-1 1H17c-.5 0-1-.5-1-1V15c0-.5.5-1 1-1h30c.5 0 1 .5 1 1z"></svg:path></svg:g><svg:path fill="#a8d600" d="M46 24c0 1.1-.9 2-2 2H20c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2zm0 12c0 1.1-.9 2-2 2H20c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2zm0 12c0 1.1-.9 2-2 2H20c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2z"></svg:path>`,
})
export class EmojioneBatteryIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
