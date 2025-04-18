import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBoard20FilledIcon],svg[fluent-board-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 3v4H3V6a3 3 0 0 1 3-3zm1 0v9H17V6a3 3 0 0 0-3-3zM17 13h-6.5v4H14a3 3 0 0 0 3-3zm-7.5 4V8H3v6a3 3 0 0 0 3 3z"></svg:path>`,
})
export class FluentBoard20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
