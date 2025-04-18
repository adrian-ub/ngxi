import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronLeft48RegularIcon],svg[fluent-chevron-left-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.884 8.366a1.25 1.25 0 0 1 0 1.768L18.018 24l13.866 13.866a1.25 1.25 0 0 1-1.768 1.768l-14.75-14.75a1.25 1.25 0 0 1 0-1.768l14.75-14.75a1.25 1.25 0 0 1 1.768 0"></svg:path>`,
})
export class FluentChevronLeft48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
