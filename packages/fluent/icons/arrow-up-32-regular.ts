import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUp32RegularIcon],svg[fluent-arrow-up-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 29a1 1 0 0 1-1-1V6.414l-8.293 8.293a1 1 0 0 1-1.414-1.414l10-10a1 1 0 0 1 1.414 0l10 10a1 1 0 0 1-1.414 1.414L17 6.414V28a1 1 0 0 1-1 1"></svg:path>`,
})
export class FluentArrowUp32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
