import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextListRomanNumeralUppercase24FilledIcon],svg[fluent-text-list-roman-numeral-uppercase-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zM10 5a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2zm0 6.5a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm0 6.5a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zM5.25 9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 5.25 9M6 16.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class FluentTextListRomanNumeralUppercase24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
