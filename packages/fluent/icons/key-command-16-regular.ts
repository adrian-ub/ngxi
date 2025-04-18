import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyCommand16RegularIcon],svg[fluent-key-command-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v1h4V4a2 2 0 1 1 2 2h-1v4h1a2 2 0 1 1-2 2v-1H6v1a2 2 0 1 1-2-2h1V6H4a2 2 0 1 1 2-2M5 5V4a1 1 0 1 0-1 1zm5 5V6H6v4zm1 1v1a1 1 0 1 0 1-1zm1-6a1 1 0 1 0-1-1v1zm-7 6H4a1 1 0 1 0 1 1z"></svg:path>`,
})
export class FluentKeyCommand16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
