import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLink12FilledIcon],svg[fluent-link-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 5.2a2.7 2.7 0 0 1 2.7-2.7h.05a.75.75 0 0 1 0 1.5H4.2A1.2 1.2 0 0 0 3 5.2v.6A1.2 1.2 0 0 0 4.2 7h.05a.75.75 0 0 1 0 1.5H4.2a2.7 2.7 0 0 1-2.7-2.7zm9 0a2.7 2.7 0 0 0-2.7-2.7h-.05a.75.75 0 0 0 0 1.5h.05A1.2 1.2 0 0 1 9 5.2v.6A1.2 1.2 0 0 1 7.8 7h-.05a.75.75 0 0 0 0 1.5h.05a2.7 2.7 0 0 0 2.7-2.7zm-5.75-.45a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentLink12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
