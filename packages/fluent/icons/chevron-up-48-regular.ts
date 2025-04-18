import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronUp48RegularIcon],svg[fluent-chevron-up-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.634 31.884a1.25 1.25 0 0 1-1.768 0L24 18.018L10.134 31.884a1.25 1.25 0 0 1-1.768-1.768l14.75-14.75a1.25 1.25 0 0 1 1.768 0l14.75 14.75a1.25 1.25 0 0 1 0 1.768"></svg:path>`,
})
export class FluentChevronUp48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
