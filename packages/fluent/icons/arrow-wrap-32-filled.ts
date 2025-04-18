import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowWrap32FilledIcon],svg[fluent-arrow-wrap-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.75c0-.69.56-1.25 1.25-1.25h19a5.75 5.75 0 0 1 0 11.5H8.75a3.25 3.25 0 0 0 0 6.5h16.982l-.866-.866a1.25 1.25 0 0 1 1.768-1.768l3 3a1.25 1.25 0 0 1 0 1.768l-3 3a1.25 1.25 0 0 1-1.768-1.768l.866-.866H8.75a5.75 5.75 0 0 1 0-11.5h14.5a3.25 3.25 0 0 0 0-6.5h-19C3.56 8 3 7.44 3 6.75"></svg:path>`,
})
export class FluentArrowWrap32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
