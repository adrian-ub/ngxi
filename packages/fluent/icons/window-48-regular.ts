import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWindow48RegularIcon],svg[fluent-window-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75v-23.5A6.25 6.25 0 0 1 12.25 6M8.5 16.5v19.25a3.75 3.75 0 0 0 3.75 3.75h23.5a3.75 3.75 0 0 0 3.75-3.75V16.5zm31-2.5v-1.75a3.75 3.75 0 0 0-3.75-3.75h-23.5a3.75 3.75 0 0 0-3.75 3.75V14z"></svg:path>`,
})
export class FluentWindow48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
