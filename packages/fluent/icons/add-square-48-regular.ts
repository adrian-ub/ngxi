import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAddSquare48RegularIcon],svg[fluent-add-square-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6zM8.5 12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75v23.5a3.75 3.75 0 0 1-3.75 3.75h-23.5a3.75 3.75 0 0 1-3.75-3.75zM24 14c.69 0 1.25.56 1.25 1.25v7.5h7.5a1.25 1.25 0 1 1 0 2.5h-7.5v7.5a1.25 1.25 0 1 1-2.5 0v-7.5h-7.5a1.25 1.25 0 1 1 0-2.5h7.5v-7.5c0-.69.56-1.25 1.25-1.25"></svg:path>`,
})
export class FluentAddSquare48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
