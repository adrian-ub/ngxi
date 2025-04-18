import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExit12FilledIcon],svg[fluent-arrow-exit-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.75A.75.75 0 0 1 3.75 3h3a.75.75 0 0 0 0-1.5h-3A2.25 2.25 0 0 0 1.5 3.75v4.5a2.25 2.25 0 0 0 2.25 2.25h3a.75.75 0 0 0 0-1.5h-3A.75.75 0 0 1 3 8.25zm5.78-.28a.75.75 0 0 0-1.06 1.06l.72.72H5.25a.75.75 0 0 0 0 1.5h3.19l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class FluentArrowExit12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
