import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibited20FilledIcon],svg[fluent-prohibited-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-1.5 0a6.47 6.47 0 0 0-1.404-4.035l-9.131 9.131A6.5 6.5 0 0 0 16.5 10M4.904 14.035l9.131-9.131a6.5 6.5 0 0 0-9.131 9.131"></svg:path>`,
})
export class FluentProhibited20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
