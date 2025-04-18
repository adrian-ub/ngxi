import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibited12FilledIcon],svg[fluent-prohibited-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0M9.5 6c0-.695-.203-1.342-.552-1.887L4.113 8.948A3.5 3.5 0 0 0 9.5 6M7.888 3.052a3.5 3.5 0 0 0-4.836 4.836z"></svg:path>`,
})
export class FluentProhibited12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
