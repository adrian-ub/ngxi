import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextAlignDistributed20FilledIcon],svg[fluent-text-align-distributed-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.78 6.28a.75.75 0 0 0 0-1.06L4.56 5h12.69a.75.75 0 0 0 0-1.5H4.56l.22-.22a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 0 0 1.06 0M18 9.25a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1 0-1.5h14.5a.75.75 0 0 1 .75.75M2.75 13.5h12.69l-.22-.22a.75.75 0 1 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H2.75a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentTextAlignDistributed20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
