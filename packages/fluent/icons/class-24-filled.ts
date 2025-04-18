import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClass24FilledIcon],svg[fluent-class-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 2A2.75 2.75 0 0 1 20 4.75v14.5A2.75 2.75 0 0 1 17.25 22H6.75A2.75 2.75 0 0 1 4 19.249V4.75A2.75 2.75 0 0 1 6.75 2h.291v8.167c0 .748.79 1.014 1.319.74l.09-.055l2.093-1.197l2.14 1.23c.446.308 1.261.1 1.35-.59l.008-.128V2zm-4.709 0v7.076l-1.621-.932a.93.93 0 0 0-.793.022l-.107.063l-1.479.846V2z"></svg:path>`,
})
export class FluentClass24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
