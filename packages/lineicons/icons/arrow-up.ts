import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowUpIcon],svg[lineicons-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m54.6 27.1l-21-20.7c-.9-.9-2.3-.9-3.2 0l-21 20.7c-.9.9-.9 2.3 0 3.2s2.3.9 3.2 0l17.1-16.8V56c0 1.2 1 2.2 2.2 2.2s2.3-1 2.3-2.2V13.3l17.3 17c.4.4 1 .6 1.6.6s1.2-.2 1.6-.7c.8-.8.8-2.3-.1-3.1"></svg:path>`,
})
export class LineiconsArrowUpIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
