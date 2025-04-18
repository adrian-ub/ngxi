import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSync16FilledIcon],svg[fluent-arrow-sync-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.97.47a.75.75 0 0 1 1.06 0l1.75 1.75a.75.75 0 0 1 0 1.06L8.03 5.03a.75.75 0 0 1-1.06-1.06l.43-.43a4.5 4.5 0 0 0-2.28 7.918a.75.75 0 0 1-.961 1.152A6 6 0 0 1 7.463 2.024L6.97 1.53a.75.75 0 0 1 0-1.06m3.815 3.016a.75.75 0 0 1 1.056-.096a6 6 0 0 1-3.304 10.586l.493.494a.75.75 0 1 1-1.06 1.06l-1.75-1.75a.75.75 0 0 1 0-1.06l1.75-1.75a.75.75 0 0 1 1.06 1.06l-.43.43a4.5 4.5 0 0 0 2.28-7.918a.75.75 0 0 1-.095-1.056"></svg:path>`,
})
export class FluentArrowSync16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
