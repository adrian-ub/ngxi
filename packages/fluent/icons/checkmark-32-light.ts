import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmark32LightIcon],svg[fluent-checkmark-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.854 5.146a.5.5 0 0 1 0 .708l-19 19a.5.5 0 0 1-.708 0l-8-8a.5.5 0 0 1 .708-.708l7.646 7.647L29.146 5.146a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class FluentCheckmark32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
