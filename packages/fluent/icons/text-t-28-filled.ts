import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextT28FilledIcon],svg[fluent-text-t-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V6h-6v16h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1V6H7v2a1 1 0 0 1-2 0z"></svg:path>`,
})
export class FluentTextT28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
