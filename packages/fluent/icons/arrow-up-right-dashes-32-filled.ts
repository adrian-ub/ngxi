import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRightDashes32FilledIcon],svg[fluent-arrow-up-right-dashes-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 3a1.25 1.25 0 1 0 0 2.5h9.482l-3.366 3.366a1.25 1.25 0 0 0 1.768 1.768L26.5 7.268v9.482a1.25 1.25 0 1 0 2.5 0V4.25C29 3.56 28.44 3 27.75 3zm-4.616 20.134a1.25 1.25 0 0 0-1.768-1.768l-5.5 5.5a1.25 1.25 0 0 0 1.768 1.768zm9-10.768a1.25 1.25 0 0 1 0 1.768l-5.5 5.5a1.25 1.25 0 0 1-1.768-1.768l5.5-5.5a1.25 1.25 0 0 1 1.768 0"></svg:path>`,
})
export class FluentArrowUpRightDashes32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
