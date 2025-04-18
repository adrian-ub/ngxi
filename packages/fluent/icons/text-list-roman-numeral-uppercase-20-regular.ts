import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextListRomanNumeralUppercase20RegularIcon],svg[fluent-text-list-roman-numeral-uppercase-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0zm0 6a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0zM4.5 13a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m4-9a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0 5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0 5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentTextListRomanNumeralUppercase20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
