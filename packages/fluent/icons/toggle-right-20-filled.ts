import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToggleRight20FilledIcon],svg[fluent-toggle-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6a4 4 0 1 0 0 8h8a4 4 0 0 0 0-8zm8 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class FluentToggleRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
