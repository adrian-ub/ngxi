import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextListRomanNumeralUppercase20FilledIcon],svg[fluent-text-list-roman-numeral-uppercase-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0zM8.75 4a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM4.5 7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m.5 6.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentTextListRomanNumeralUppercase20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
