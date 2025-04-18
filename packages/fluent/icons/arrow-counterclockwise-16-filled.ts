import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCounterclockwise16FilledIcon],svg[fluent-arrow-counterclockwise-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 8a4.5 4.5 0 0 0-7.854-3H6.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 1 1 1.5 0v.778a6 6 0 1 1-1.94 5.324a.75.75 0 1 1 1.485-.211A4.501 4.501 0 0 0 12.5 8"></svg:path>`,
})
export class FluentArrowCounterclockwise16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
