import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextWrapOff16FilledIcon],svg[fluent-text-wrap-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.793 12.5l2.353 2.354a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l1.24 1.24A.75.75 0 0 0 2.75 4.5h1.043l2.5 2.5H2.75a.75.75 0 0 0 0 1.5h5.043l1.573 1.573L8.22 11.22a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.22-.22zM9.12 7l1.5 1.5h1.629a1.25 1.25 0 0 1 .674 2.303l1.072 1.072A2.75 2.75 0 0 0 12.25 7zm-4-4l1.5 1.5h6.629a.75.75 0 0 0 0-1.5zM2 11.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentTextWrapOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
