import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLinkSquare24RegularIcon],svg[fluent-link-square-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v6a3.25 3.25 0 0 0 3.25 3.25H7.5V14H6.25a1.75 1.75 0 0 1-1.75-1.75v-6c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v6A1.75 1.75 0 0 1 12.25 14H11v1.5h1.25a3.25 3.25 0 0 0 3.25-3.25v-6A3.25 3.25 0 0 0 12.25 3zM10 11.75c0-.966.784-1.75 1.75-1.75h1.248V8.5H11.75a3.25 3.25 0 0 0-3.25 3.25v6A3.25 3.25 0 0 0 11.75 21h6A3.25 3.25 0 0 0 21 17.75v-6a3.25 3.25 0 0 0-3.25-3.25H16.5V10h1.25c.966 0 1.75.784 1.75 1.75v6a1.75 1.75 0 0 1-1.75 1.75h-6A1.75 1.75 0 0 1 10 17.75z"></svg:path>`,
})
export class FluentLinkSquare24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
