import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFrame16RegularIcon],svg[fluent-frame-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1.5a.5.5 0 0 0-1 0V3H1.5a.5.5 0 0 0 0 1H3v8H1.5a.5.5 0 0 0 0 1H3v1.5a.5.5 0 0 0 1 0V13h8v1.5a.5.5 0 0 0 1 0V13h1.5a.5.5 0 0 0 0-1H13V4h1.5a.5.5 0 0 0 0-1H13V1.5a.5.5 0 0 0-1 0V3H4zM12 12H4V4h8z"></svg:path>`,
})
export class FluentFrame16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
