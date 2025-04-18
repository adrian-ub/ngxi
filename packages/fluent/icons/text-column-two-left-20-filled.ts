import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextColumnTwoLeft20FilledIcon],svg[fluent-text-column-two-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.75A.75.75 0 0 1 3.75 5h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 3 5.75m6 0A.75.75 0 0 1 9.75 5h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 9 5.75m-6 3A.75.75 0 0 1 3.75 8h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 3 8.75m6 0A.75.75 0 0 1 9.75 8h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 9 8.75m-6 3a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m6 0a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m-6 3a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m6 0a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentTextColumnTwoLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
