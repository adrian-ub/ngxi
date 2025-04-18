import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRouting24FilledIcon],svg[fluent-arrow-routing-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.53 3.22a.75.75 0 1 0-1.06 1.06l2.97 2.97H14.5a3.25 3.25 0 0 0-3.25 3.25v3a1.75 1.75 0 0 1-1.33 1.7A4.001 4.001 0 0 0 2 16a4 4 0 0 0 7.935.721A3.25 3.25 0 0 0 12.75 13.5v-3c0-.966.784-1.75 1.75-1.75h4.94l-2.97 2.97a.75.75 0 1 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class FluentArrowRouting24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
