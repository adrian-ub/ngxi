import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle420FilledIcon],svg[fluent-number-circle-4-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m9.995-3.691c0-.738-.954-1.032-1.37-.423l-3.533 5.176a.6.6 0 0 0 .496.938h3.41v1.5a.5.5 0 0 0 1 0V12H13a.5.5 0 0 0 0-1h-1.003zm-1 .809L10.997 11H8.345z"></svg:path>`,
})
export class FluentNumberCircle420FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
