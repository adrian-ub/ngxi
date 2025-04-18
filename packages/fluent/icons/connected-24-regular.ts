import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentConnected24RegularIcon],svg[fluent-connected-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8a2.98 2.98 0 0 0 1.738-.555l2.817 2.817C9.205 10.752 9 11.352 9 12s.205 1.248.555 1.738l-2.817 2.817a3 3 0 1 0 .707.707l2.817-2.817c.49.35 1.09.555 1.738.555s1.248-.205 1.738-.555l2.817 2.817a3 3 0 1 0 .707-.707l-2.817-2.817c.35-.49.555-1.09.555-1.738s-.205-1.248-.555-1.738l2.817-2.817a3 3 0 1 0-.707-.707l-2.817 2.817A3 3 0 0 0 12 9a2.98 2.98 0 0 0-1.738.555L7.445 6.738A3 3 0 1 0 5 8m0-1a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4M21 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 16a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-5-9a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class FluentConnected24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
