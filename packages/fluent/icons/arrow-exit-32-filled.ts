import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExit32FilledIcon],svg[fluent-arrow-exit-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 2.5A4.75 4.75 0 0 0 2.5 7.25v17.5a4.75 4.75 0 0 0 4.75 4.75h11.5a1.25 1.25 0 1 0 0-2.5H7.25A2.25 2.25 0 0 1 5 24.75V7.25A2.25 2.25 0 0 1 7.25 5h11.5a1.25 1.25 0 1 0 0-2.5zm15.884 6.116a1.25 1.25 0 0 0-1.768 1.768l4.366 4.366H11.25a1.25 1.25 0 1 0 0 2.5h14.482l-4.366 4.366a1.25 1.25 0 0 0 1.768 1.768l6.5-6.5a1.25 1.25 0 0 0 0-1.768z"></svg:path>`,
})
export class FluentArrowExit32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
