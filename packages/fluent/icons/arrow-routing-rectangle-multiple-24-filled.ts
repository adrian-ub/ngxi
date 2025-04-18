import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRoutingRectangleMultiple24FilledIcon],svg[fluent-arrow-routing-rectangle-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm9 1.5a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 0 2.5-2.5zM17.53 3.22a.75.75 0 1 0-1.06 1.06l2.97 2.97H14.5a3.25 3.25 0 0 0-3.25 3.25v3a1.75 1.75 0 0 1-1.33 1.7A4.001 4.001 0 0 0 2 16a4 4 0 0 0 7.935.721A3.25 3.25 0 0 0 12.75 13.5v-3c0-.966.784-1.75 1.75-1.75h4.94l-2.97 2.97a.75.75 0 1 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class FluentArrowRoutingRectangleMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
