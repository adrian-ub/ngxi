import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextAsterisk20RegularIcon],svg[fluent-text-asterisk-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 2.5a.5.5 0 0 0-1 0v6.293l-4.45-4.45a.5.5 0 1 0-.707.707l4.45 4.45H2.5a.5.5 0 0 0 0 1h6.293l-4.45 4.45a.5.5 0 1 0 .707.707l4.45-4.45V17.5a.5.5 0 0 0 1 0v-6.293l4.45 4.45a.5.5 0 1 0 .707-.707l-4.45-4.45H17.5a.5.5 0 0 0 0-1h-6.293l4.45-4.45a.5.5 0 1 0-.707-.707l-4.45 4.45z"></svg:path>`,
})
export class FluentTextAsterisk20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
