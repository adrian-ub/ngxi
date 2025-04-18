import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextContinuous24FilledIcon],svg[fluent-text-continuous-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m5 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m12 5H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2M3.293 11.207a1 1 0 0 1 1.414-1.414l1.5 1.5a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414L4.086 12z"></svg:path>`,
})
export class FluentTextContinuous24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
