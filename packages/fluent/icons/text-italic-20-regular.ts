import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextItalic20RegularIcon],svg[fluent-text-italic-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3a.5.5 0 0 1 0 1h-3.157L8.227 16H11.5a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1h3.156l4.615-12H8.5a.5.5 0 0 1 0-1z"></svg:path>`,
})
export class FluentTextItalic20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
