import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderAll20RegularIcon],svg[fluent-border-all-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v3.5h5.5V4zm4.5 0v5.5H16V6a2 2 0 0 0-2-2zm5.5 6.5h-5.5V16H14a2 2 0 0 0 2-2zM9.5 16v-5.5H4V14a2 2 0 0 0 2 2z"></svg:path>`,
})
export class FluentBorderAll20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
