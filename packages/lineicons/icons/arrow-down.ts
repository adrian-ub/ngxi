import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowDownIcon],svg[lineicons-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.6 33.8c-.9-.9-2.3-.9-3.2 0L34.3 50.6V8c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v42.7l-17.3-17c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l21 20.7c.4.4 1 .6 1.6.6s1.1-.2 1.6-.6l21-20.7c.9-.8.9-2.3 0-3.1"></svg:path>`,
})
export class LineiconsArrowDownIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
