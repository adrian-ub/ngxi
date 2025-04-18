import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLine20RegularIcon],svg[fluent-line-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.854 2.15a.5.5 0 0 1 0 .706l-15 15a.5.5 0 0 1-.708-.707l15-15a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class FluentLine20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
