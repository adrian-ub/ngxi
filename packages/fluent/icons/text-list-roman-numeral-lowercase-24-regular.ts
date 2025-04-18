import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextListRomanNumeralLowercase24RegularIcon],svg[fluent-text-list-roman-numeral-lowercase-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 4.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zM5.25 11a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75m0 7a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75M9 5.75A.75.75 0 0 1 9.75 5h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 9 5.75m0 6.5a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75m0 6.5a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75M5.25 17.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 9.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentTextListRomanNumeralLowercase24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
