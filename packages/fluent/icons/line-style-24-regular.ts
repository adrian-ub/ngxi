import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineStyle24RegularIcon],svg[fluent-line-style-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm7.5 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm7.5 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm3.502 6.503h-18.5l-.101.007a.75.75 0 0 0 .101 1.493h18.5l.102-.007a.75.75 0 0 0-.102-1.493M3.25 17a1.25 1.25 0 0 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentLineStyle24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
