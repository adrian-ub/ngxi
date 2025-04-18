import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronUp28RegularIcon],svg[fluent-chevron-up-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.78 18.53a.75.75 0 0 1-1.06 0L14 9.81l-8.72 8.72a.75.75 0 0 1-1.06-1.06l9.25-9.25a.75.75 0 0 1 1.06 0l9.25 9.25a.75.75 0 0 1 0 1.06"></svg:path>`,
})
export class FluentChevronUp28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
