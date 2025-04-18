import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsChevronRightIcon],svg[lineicons-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.7 57.3c-.6 0-1.1-.2-1.6-.6c-.9-.9-.9-2.3 0-3.2l21-21.5l-21-21.4c-.9-.9-.9-2.3 0-3.2s2.3-.9 3.2 0l22.6 23c.9.9.9 2.3 0 3.2l-22.6 23c-.4.4-1 .7-1.6.7"></svg:path>`,
})
export class LineiconsChevronRightIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
