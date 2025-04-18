import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextListRomanNumeralLowercase24FilledIcon],svg[fluent-text-list-roman-numeral-lowercase-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 .5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 5.25 4M9 6a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1m0 6.5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1M9 19a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1m-3.75-1a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75M6 11.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm-.75 5.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 9.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentTextListRomanNumeralLowercase24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
