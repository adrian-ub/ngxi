import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronDownUp16FilledIcon],svg[fluent-chevron-down-up-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.78 3.53L8.53 6.78a.75.75 0 0 1-1.06 0L4.22 3.53a.75.75 0 0 1 1.06-1.06L8 5.19l2.72-2.72a.75.75 0 1 1 1.06 1.06M8.53 9.22a.75.75 0 0 0-1.06 0l-3.25 3.25a.75.75 0 1 0 1.06 1.06L8 10.81l2.72 2.72a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class FluentChevronDownUp16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
