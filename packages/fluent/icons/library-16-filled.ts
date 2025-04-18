import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLibrary16FilledIcon],svg[fluent-library-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.249 2C1.559 2 1 2.56 1 3.25v9.495c0 .69.56 1.25 1.249 1.25h.5c.69 0 1.249-.56 1.249-1.25V3.249c0-.69-.56-1.249-1.25-1.249zm3.997 0c-.69 0-1.25.56-1.25 1.25v9.495c0 .69.56 1.25 1.25 1.25h.5a1.25 1.25 0 0 0 1.248-1.25V3.249A1.25 1.25 0 0 0 6.745 2zm5.726 2.777a1.25 1.25 0 0 0-1.571-.713l-.582.204a1.25 1.25 0 0 0-.746 1.645l2.937 7.304c.249.62.94.933 1.571.713l.582-.204a1.25 1.25 0 0 0 .746-1.646z"></svg:path>`,
})
export class FluentLibrary16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
