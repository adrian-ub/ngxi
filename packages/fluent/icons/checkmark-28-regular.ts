import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmark28RegularIcon],svg[fluent-checkmark-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.03 13.47a.75.75 0 0 0-1.06 1.06l7 7a.75.75 0 0 0 1.06 0l14-14a.75.75 0 0 0-1.06-1.06L10.5 19.94z"></svg:path>`,
})
export class FluentCheckmark28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
