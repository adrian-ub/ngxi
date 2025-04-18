import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareCloseTray24RegularIcon],svg[fluent-share-close-tray-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17.75A2.25 2.25 0 0 0 4.25 20h15.5A2.25 2.25 0 0 0 22 17.75V6.25A2.25 2.25 0 0 0 19.75 4H4.25A2.25 2.25 0 0 0 2 6.25zm2.25.75a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75zM12 16.755a.75.75 0 0 0 .53-.22l3.255-3.255a.75.75 0 1 0-1.06-1.06l-1.975 1.974V7.747a.75.75 0 0 0-1.5 0v6.445L9.28 12.22a.75.75 0 1 0-1.06 1.06l3.25 3.255c.14.14.33.22.53.22"></svg:path>`,
})
export class FluentShareCloseTray24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
