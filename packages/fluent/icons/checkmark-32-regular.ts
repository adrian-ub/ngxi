import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmark32RegularIcon],svg[fluent-checkmark-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.726 5.312a1 1 0 0 1-.038 1.414l-19 18a1 1 0 0 1-1.42-.044l-7-7.5a1 1 0 1 1 1.463-1.364l6.313 6.763L28.312 5.274a1 1 0 0 1 1.414.038"></svg:path>`,
})
export class FluentCheckmark32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
