import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextUnderlineCharacterU24FilledIcon],svg[fluent-text-underline-character-u-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5a1 1 0 0 0-2 0v6.5a5 5 0 0 0 10 0V5a1 1 0 1 0-2 0v6.5a3 3 0 1 1-6 0zM7 18a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentTextUnderlineCharacterU24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
