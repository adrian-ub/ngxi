import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloseIcon],svg[lineicons-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.2 32L59.6 7.6c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0L32 28.8L7.6 4.4c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2L28.8 32L4.4 56.4c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7L32 35.2l24.4 24.4c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2z"></svg:path>`,
})
export class LineiconsCloseIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
