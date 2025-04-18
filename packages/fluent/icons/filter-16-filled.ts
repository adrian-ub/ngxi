import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFilter16FilledIcon],svg[fluent-filter-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.75 3.75A.75.75 0 0 1 2.5 3h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75m2 4A.75.75 0 0 1 4.5 7h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m2 4A.75.75 0 0 1 6.5 11h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentFilter16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
