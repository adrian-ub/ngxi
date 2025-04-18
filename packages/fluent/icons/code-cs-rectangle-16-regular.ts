import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodeCsRectangle16RegularIcon],svg[fluent-code-cs-rectangle-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9.5v-2a.5.5 0 1 1 1 0a.5.5 0 1 0 1 0a1.5 1.5 0 0 0-3 0v2a1.5 1.5 0 0 0 3 0a.5.5 0 1 0-1 0a.5.5 0 1 1-1 0m7.854.354A.5.5 0 0 0 11.5 9H11V8h.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0V7H9v-.5a.5.5 0 1 0-1 0V7h-.5a.5.5 0 1 0 0 1H8v1h-.5a.5.5 0 1 0 0 1H8v.5a.5.5 0 0 0 1 0V10h1v.5a.5.5 0 0 0 1 0V10h.5a.5.5 0 0 0 .354-.146M9 8h1v1H9zM2.75 3A1.75 1.75 0 0 0 1 4.75v7.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 14 12.25v-7.5A1.75 1.75 0 0 0 12.25 3zM2 4.75A.75.75 0 0 1 2.75 4h9.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class FluentCodeCsRectangle16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
