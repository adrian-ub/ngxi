import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEraserTool20RegularIcon],svg[fluent-eraser-tool-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2a.5.5 0 0 1 .5.5V6h12V2.5a.5.5 0 0 1 1 0v12a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 3 14.5v-12a.5.5 0 0 1 .5-.5m.5 9v3.5A2.5 2.5 0 0 0 6.5 17h7a2.5 2.5 0 0 0 2.5-2.5V11zm12-1V7H4v3z"></svg:path>`,
})
export class FluentEraserTool20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
