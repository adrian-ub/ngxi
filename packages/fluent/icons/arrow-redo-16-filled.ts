import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRedo16FilledIcon],svg[fluent-arrow-redo-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.002 2.75a.75.75 0 0 0-1.5 0v3.095L8.828 3.172a4 4 0 0 0-5.656 5.656l4.95 4.95a.75.75 0 1 0 1.06-1.06l-4.95-4.95a2.5 2.5 0 0 1 3.536-3.536L10.036 6.5H7.75a.75.75 0 0 0 0 1.5h4.4c.47 0 .85-.38.85-.85z"></svg:path>`,
})
export class FluentArrowRedo16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
