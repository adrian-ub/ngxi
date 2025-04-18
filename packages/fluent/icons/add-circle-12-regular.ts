import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAddCircle12RegularIcon],svg[fluent-add-circle-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3.5c.23 0 .417.187.417.417v1.666h1.666a.417.417 0 0 1 0 .834H6.417v1.666a.417.417 0 0 1-.834 0V6.417H3.917a.417.417 0 0 1 0-.834h1.666V3.917c0-.23.187-.417.417-.417M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6m5-4.167a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334"></svg:path>`,
})
export class FluentAddCircle12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
