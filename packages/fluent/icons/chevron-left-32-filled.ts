import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronLeft32FilledIcon],svg[fluent-chevron-left-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.884 5.366a1.25 1.25 0 0 1 0 1.768L12.018 16l8.866 8.866a1.25 1.25 0 0 1-1.768 1.768l-9.75-9.75a1.25 1.25 0 0 1 0-1.768l9.75-9.75a1.25 1.25 0 0 1 1.768 0"></svg:path>`,
})
export class FluentChevronLeft32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
