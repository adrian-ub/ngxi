import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEraserTool24FilledIcon],svg[fluent-eraser-tool-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2.75a.75.75 0 0 0-1.5 0v14.5A4.75 4.75 0 0 0 7.75 22h8.5A4.75 4.75 0 0 0 21 17.25V2.75a.75.75 0 0 0-1.5 0V7h-15zm0 5.75h15V12h-15z"></svg:path>`,
})
export class FluentEraserTool24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
