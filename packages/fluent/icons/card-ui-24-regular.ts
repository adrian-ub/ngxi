import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCardUi24RegularIcon],svg[fluent-card-ui-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4zM3.5 7.25c0-.966.784-1.75 1.75-1.75h13.5c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75zm1.5.5A.75.75 0 0 1 5.75 7h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 5 7.75M6 13a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm-1-2.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentCardUi24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
