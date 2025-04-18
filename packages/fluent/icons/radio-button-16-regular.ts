import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRadioButton16RegularIcon],svg[fluent-radio-button-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8"></svg:path>`,
})
export class FluentRadioButton16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
