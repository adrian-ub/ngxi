import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextListRomanNumeralUppercase24RegularIcon],svg[fluent-text-list-roman-numeral-uppercase-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zm0 7a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zM5.25 16a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75m4.5-11a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 6.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 6.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentTextListRomanNumeralUppercase24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
