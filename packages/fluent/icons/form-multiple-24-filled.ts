import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFormMultiple24FilledIcon],svg[fluent-form-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.25 11.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></svg:path><svg:path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v9a3.25 3.25 0 0 0 3.25 3.25h9a3.25 3.25 0 0 0 3.25-3.25v-9A3.25 3.25 0 0 0 15.25 3zM5 12.25a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m5.5 0a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M5 7.75A.75.75 0 0 1 5.75 7h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 5 7.75"></svg:path><svg:path d="M8.75 21a3.25 3.25 0 0 1-2.74-1.5h9.74a3.75 3.75 0 0 0 3.75-3.75V6.011a3.25 3.25 0 0 1 1.5 2.74v7A5.25 5.25 0 0 1 15.75 21z"></svg:path></svg:g>`,
})
export class FluentFormMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
