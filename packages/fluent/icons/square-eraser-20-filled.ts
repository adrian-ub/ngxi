import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareEraser20FilledIcon],svg[fluent-square-eraser-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.733 13.637l4.9-4.9A2.48 2.48 0 0 1 17 8.589V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.591a2.5 2.5 0 0 1 .142-3.363m7.736-4.198l2.095 2.095a1.5 1.5 0 0 1 0 2.122l-3.6 3.6l-4.216-4.217l3.6-3.6a1.5 1.5 0 0 1 2.121 0m-2.212 8.523l-4.216-4.217l-.6.6a1.5 1.5 0 0 0 0 2.122l2.1 2.095a1.5 1.5 0 0 0 1.117.438h4.092a.5.5 0 0 0 0-1h-2.531z"></svg:path>`,
})
export class FluentSquareEraser20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
