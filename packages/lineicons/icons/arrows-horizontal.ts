import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowsHorizontalIcon],svg[lineicons-arrows-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.6 30.4L51.4 20.1c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l6.4 6.5H9.3l6.4-6.5c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0L2.4 30.4c-.9.9-.9 2.3 0 3.2l10.2 10.3c.4.4 1 .7 1.6.7s1.1-.2 1.6-.6c.9-.9.9-2.3 0-3.2l-6.4-6.5h45.2l-6.4 6.5c-.9.9-.9 2.3 0 3.2c.4.4 1 .6 1.6.6s1.2-.2 1.6-.7l10.2-10.3c.9-.9.9-2.3 0-3.2"></svg:path>`,
})
export class LineiconsArrowsHorizontalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
