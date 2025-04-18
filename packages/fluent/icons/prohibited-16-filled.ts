import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibited16FilledIcon],svg[fluent-prohibited-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.323 3.616a5.501 5.501 0 0 0-7.707 7.707zm1.06 1.061l-7.706 7.707a5.501 5.501 0 0 0 7.707-7.707M3.05 3.05a7 7 0 1 1 9.9 9.9a7 7 0 0 1-9.9-9.9"></svg:path>`,
})
export class FluentProhibited16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
