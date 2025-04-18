import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextUnderlineCharacterU16RegularIcon],svg[fluent-text-underline-character-u-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2.5a.5.5 0 0 0-1 0v5a3.5 3.5 0 1 0 7 0v-5a.5.5 0 0 0-1 0v5a2.5 2.5 0 0 1-5 0zM4.5 13a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentTextUnderlineCharacterU16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
