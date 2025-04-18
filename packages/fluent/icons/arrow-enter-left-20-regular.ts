import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowEnterLeft20RegularIcon],svg[fluent-arrow-enter-left-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.76 12l3.333 3.136a.5.5 0 0 1-.686.728l-4.25-4a.5.5 0 0 1 0-.728l4.25-4a.5.5 0 1 1 .686.728L3.76 11H15a2 2 0 0 0 2-2V4.5a.5.5 0 0 1 1 0V9a3 3 0 0 1-3 3z"></svg:path>`,
})
export class FluentArrowEnterLeft20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
