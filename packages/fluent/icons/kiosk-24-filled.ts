import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKiosk24FilledIcon],svg[fluent-kiosk-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 2A2.25 2.25 0 0 0 4 4.25v6.5A2.25 2.25 0 0 0 6.25 13H9.5v7.5H7.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5H14.5V13h3.25A2.25 2.25 0 0 0 20 10.75v-6.5A2.25 2.25 0 0 0 17.75 2zM11 20.5V13h2v7.5z"></svg:path>`,
})
export class FluentKiosk24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
