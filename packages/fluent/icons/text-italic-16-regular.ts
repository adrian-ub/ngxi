import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextItalic16RegularIcon],svg[fluent-text-italic-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2H7a.5.5 0 0 0 0 1h2.474L5.656 13H3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H6.726l3.818-10H13a.5.5 0 0 0 0-1"></svg:path>`,
})
export class FluentTextItalic16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
