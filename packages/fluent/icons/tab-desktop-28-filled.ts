import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktop28FilledIcon],svg[fluent-tab-desktop-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v3.25A2.75 2.75 0 0 0 15.75 9H25v12.25A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3zm1.5 0v3.25c0 .69.56 1.25 1.25 1.25H25v-.75A3.75 3.75 0 0 0 21.25 3z"></svg:path>`,
})
export class FluentTabDesktop28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
