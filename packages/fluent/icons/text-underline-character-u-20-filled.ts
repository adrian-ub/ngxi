import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextUnderlineCharacterU20FilledIcon],svg[fluent-text-underline-character-u-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3.75a.75.75 0 0 0-1.5 0V9.5a4.5 4.5 0 1 0 9 0V3.75a.75.75 0 0 0-1.5 0V9.5a3 3 0 1 1-6 0zM5.75 15.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentTextUnderlineCharacterU20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
