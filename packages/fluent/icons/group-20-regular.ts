import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGroup20RegularIcon],svg[fluent-group-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4.5q0 .257-.05.5H10a1 1 0 0 1 1 1v2h-1a2 2 0 0 0-2 2v1H6a1 1 0 0 1-1-1V6.95a2.5 2.5 0 0 1-1 0V10a2 2 0 0 0 2 2h2v2a2 2 0 0 0 2 2h3.05a2.5 2.5 0 0 1 0-1H10a1 1 0 0 1-1-1v-2h1a2 2 0 0 0 2-2V9h2a1 1 0 0 1 1 1v3.05a2.5 2.5 0 0 1 1 0V10a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2H6.95q.05.243.05.5M11 9v1a1 1 0 0 1-1 1H9v-1a1 1 0 0 1 1-1zM6 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentGroup20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
