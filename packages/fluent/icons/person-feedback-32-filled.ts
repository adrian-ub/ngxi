import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonFeedback32FilledIcon],svg[fluent-person-feedback-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 15.89c.18.08.37.11.55.11c.41 0 .81-.17 1.1-.48L23.94 13H27c1.65 0 3-1.35 3-3V5c0-1.65-1.35-3-3-3h-8c-1.65 0-3 1.35-3 3v4.99c0 1.65 1.35 3 3 3v1.5c0 .63.37 1.17.95 1.4M10.5 18c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0 11.99c-2.9 0-5.12-.8-6.62-2.368c-1.931-2.015-1.886-4.585-1.881-4.838v-.017C2 21.26 3.26 20 4.82 20h11.36c1.55 0 2.82 1.259 2.82 2.817v.01c.004.182.06 2.77-1.88 4.805C15.62 29.201 13.4 30 10.5 30z"></svg:path>`,
})
export class FluentPersonFeedback32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
