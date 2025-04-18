import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronUp32FilledIcon],svg[fluent-chevron-up-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.366 20.884a1.25 1.25 0 0 0 1.768 0L16 12.018l8.866 8.866a1.25 1.25 0 0 0 1.768-1.768l-9.75-9.75a1.25 1.25 0 0 0-1.768 0l-9.75 9.75a1.25 1.25 0 0 0 0 1.768"></svg:path>`,
})
export class FluentChevronUp32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
