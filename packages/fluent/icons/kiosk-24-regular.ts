import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKiosk24RegularIcon],svg[fluent-kiosk-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.25A2.25 2.25 0 0 1 6.25 2h11.5A2.25 2.25 0 0 1 20 4.25v6.5A2.25 2.25 0 0 1 17.75 13H14.5v7.5h1.75a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5H9.5V13H6.25A2.25 2.25 0 0 1 4 10.75zM11 13v7.5h2V13zM6.25 3.5a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class FluentKiosk24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
