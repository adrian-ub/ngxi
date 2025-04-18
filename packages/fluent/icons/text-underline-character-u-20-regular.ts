import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextUnderlineCharacterU20RegularIcon],svg[fluent-text-underline-character-u-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3.5a.5.5 0 0 0-1 0V10a4 4 0 0 0 8 0V3.5a.5.5 0 0 0-1 0V10a3 3 0 1 1-6 0zM5.5 16a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentTextUnderlineCharacterU20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
