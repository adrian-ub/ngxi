import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEraser20FilledIcon],svg[fluent-eraser-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.197 2.44a1.5 1.5 0 0 1 2.121 0l4.243 4.242a1.5 1.5 0 0 1 0 2.121L9.364 17H14.5a.5.5 0 1 1 0 1H7.82a1.5 1.5 0 0 1-1.14-.437L2.437 13.32a1.5 1.5 0 0 1 0-2.121zM9.781 15.168l-4.95-4.95l-1.687 1.687a.5.5 0 0 0 0 .707l4.243 4.243a.5.5 0 0 0 .707 0z"></svg:path>`,
})
export class FluentEraser20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
