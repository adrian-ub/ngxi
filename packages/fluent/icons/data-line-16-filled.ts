import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataLine16FilledIcon],svg[fluent-data-line-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4a2 2 0 0 1-2.665 1.887l-1.64 2.05a2 2 0 0 1-2.87 2.682l-2.832 1.214q.006.075.007.151V12a2 2 0 1 1-.338-1.113l2.51-1.076a2 2 0 0 1 2.794-2.563l1.537-1.922A2 2 0 1 1 15 4"></svg:path>`,
})
export class FluentDataLine16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
