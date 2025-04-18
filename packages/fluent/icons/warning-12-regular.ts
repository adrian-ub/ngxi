import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWarning12RegularIcon],svg[fluent-warning-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 4.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zM6 6.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-.786-5.291a.903.903 0 0 1 1.572 0l4.092 7.169c.348.61-.089 1.372-.787 1.372H1.91c-.698 0-1.135-.762-.787-1.372zm.786.66L2.083 8.983h7.834z"></svg:path>`,
})
export class FluentWarning12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
