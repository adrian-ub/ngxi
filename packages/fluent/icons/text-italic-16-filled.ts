import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextItalic16FilledIcon],svg[fluent-text-italic-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.8 2H7a.75.75 0 0 0 0 1.5h2.01l-3.428 9H3.2a.75.75 0 0 0 0 1.5H9a.75.75 0 0 0 0-1.5H7.188l3.428-9H12.8a.75.75 0 0 0 0-1.5"></svg:path>`,
})
export class FluentTextItalic16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
