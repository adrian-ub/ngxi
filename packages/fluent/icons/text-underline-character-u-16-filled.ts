import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextUnderlineCharacterU16FilledIcon],svg[fluent-text-underline-character-u-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2.75a.75.75 0 0 0-1.5 0V7.5a3.5 3.5 0 1 0 7 0V2.75a.75.75 0 0 0-1.5 0V7.5a2 2 0 1 1-4 0zM4.75 12.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentTextUnderlineCharacterU16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
