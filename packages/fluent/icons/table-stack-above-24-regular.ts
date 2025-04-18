import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackAbove24RegularIcon],svg[fluent-table-stack-above-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.25 4.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zm0 4a.75.75 0 0 1 .75.75v8.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75v-8.5a.75.75 0 0 1 .75-.75zM14 10h-4v4h4zm-5.5 0h-4v4h4zm0 5.5h-4v2.25c0 .966.784 1.75 1.75 1.75H8.5zm5.5 0h-4v4h4zm1.5 4h2.25a1.75 1.75 0 0 0 1.75-1.75V15.5h-4zm4-9.5h-4v4h4z"></svg:path>`,
})
export class FluentTableStackAbove24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
