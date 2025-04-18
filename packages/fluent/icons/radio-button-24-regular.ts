import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRadioButton24RegularIcon],svg[fluent-radio-button-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22.002c5.524 0 10.002-4.478 10.002-10.001c0-5.524-4.478-10.002-10.002-10.002S1.998 6.477 1.998 12.001c0 5.523 4.478 10.001 10.002 10.001m0-1.5A8.502 8.502 0 1 1 12 3.5a8.502 8.502 0 0 1 0 17.003"></svg:path>`,
})
export class FluentRadioButton24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
