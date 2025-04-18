import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLine32RegularIcon],svg[fluent-line-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.707 3.293a1 1 0 0 1 0 1.414l-24 24a1 1 0 0 1-1.414-1.414l24-24a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class FluentLine32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
