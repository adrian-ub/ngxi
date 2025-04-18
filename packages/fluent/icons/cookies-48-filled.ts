import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCookies48FilledIcon],svg[fluent-cookies-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20q-.002-1.68-.269-3.287a1.25 1.25 0 0 0-2.25-.522a5.5 5.5 0 0 1-9.964-2.76a1.25 1.25 0 0 0-.927-1.113a5.503 5.503 0 0 1-1.946-9.676a1.25 1.25 0 0 0-.506-2.213A20 20 0 0 0 24 4m0 22a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-6 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4-12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m18 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class FluentCookies48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
