import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextColumnOneWide24RegularIcon],svg[fluent-text-column-one-wide-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zM3 13.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75M3.75 17a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentTextColumnOneWide24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
