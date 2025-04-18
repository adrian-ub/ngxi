import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextListRomanNumeralLowercase20RegularIcon],svg[fluent-text-list-roman-numeral-lowercase-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 .5A.5.5 0 0 1 5 3v2.5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5m0 6A.5.5 0 0 1 5 9v2.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5M5 15a.5.5 0 0 0-1 0v2.5a.5.5 0 0 0 1 0zM8 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m-3-7a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M4.5 14a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class FluentTextListRomanNumeralLowercase20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
