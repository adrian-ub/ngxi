import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentConnected24FilledIcon],svg[fluent-connected-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5a2.98 2.98 0 0 1-.555 1.738l2.817 2.817C10.752 9.205 11.352 9 12 9s1.248.205 1.738.555l2.817-2.817a3 3 0 1 1 .707.707l-2.817 2.817c.35.49.555 1.09.555 1.738s-.205 1.248-.555 1.738l2.817 2.817a3 3 0 1 1-.707.707l-2.817-2.817A2.98 2.98 0 0 1 12 15a3 3 0 0 1-1.738-.555l-2.817 2.817a3 3 0 1 1-.707-.707l2.817-2.817A3 3 0 0 1 9 12c0-.648.205-1.248.555-1.738L6.738 7.445A3 3 0 1 1 8 5"></svg:path>`,
})
export class FluentConnected24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
