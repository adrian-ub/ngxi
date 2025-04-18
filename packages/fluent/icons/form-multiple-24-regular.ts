import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFormMultiple24RegularIcon],svg[fluent-form-multiple-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 12.25a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m2.25-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m3.25.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75M6 7.75A.75.75 0 0 1 6.75 7h8a.75.75 0 0 1 0 1.5h-8A.75.75 0 0 1 6 7.75"></svg:path><svg:path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v9a3.25 3.25 0 0 0 3.25 3.25h9a3.25 3.25 0 0 0 3.25-3.25v-9A3.25 3.25 0 0 0 15.25 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h9c.966 0 1.75.784 1.75 1.75v9a1.745 1.745 0 0 1-1.233 1.672q-.246.076-.517.078h-9a1.75 1.75 0 0 1-1.75-1.75z"></svg:path><svg:path d="M8.75 21a3.25 3.25 0 0 1-2.74-1.5h9.74a3.75 3.75 0 0 0 3.75-3.75V6.011a3.25 3.25 0 0 1 1.5 2.74v7A5.25 5.25 0 0 1 15.75 21z"></svg:path></svg:g>`,
})
export class FluentFormMultiple24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
