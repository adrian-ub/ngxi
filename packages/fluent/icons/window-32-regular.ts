import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWindow32RegularIcon],svg[fluent-window-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zM5 7.5A2.5 2.5 0 0 1 7.5 5h17A2.5 2.5 0 0 1 27 7.5V9H5zM5 11h22v13.5a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 24.5z"></svg:path>`,
})
export class FluentWindow32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
