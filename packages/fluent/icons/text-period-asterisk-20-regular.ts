import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPeriodAsterisk20RegularIcon],svg[fluent-text-period-asterisk-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.996 4.496a.5.5 0 0 0-1 0v2.465l-2.341-.76a.5.5 0 0 0-.31.95l2.345.762l-1.45 1.998a.5.5 0 1 0 .808.588l1.45-1.996l1.45 1.995a.5.5 0 0 0 .808-.587l-1.45-1.997l2.348-.762a.5.5 0 0 0-.309-.951l-2.349.763zM6 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentTextPeriodAsterisk20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
