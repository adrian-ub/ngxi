import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFrame24RegularIcon],svg[fluent-frame-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2.75a.75.75 0 0 0-1.5 0V4.5H2.75a.75.75 0 0 0 0 1.5H4.5v12H2.75a.75.75 0 0 0 0 1.5H4.5v1.75a.75.75 0 0 0 1.5 0V19.5h12v1.75a.75.75 0 0 0 1.5 0V19.5h1.75a.75.75 0 0 0 0-1.5H19.5V6h1.75a.75.75 0 0 0 0-1.5H19.5V2.75a.75.75 0 0 0-1.5 0V4.5H6zM18 18H6V6h12z"></svg:path>`,
})
export class FluentFrame24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
