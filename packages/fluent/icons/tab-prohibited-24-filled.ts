import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabProhibited24FilledIcon],svg[fluent-tab-prohibited-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.857 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6.165a6.5 6.5 0 0 1-.848-2H5.857a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5.142a6.5 6.5 0 0 1 2 .791V6a3 3 0 0 0-3-3zM17.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m-3.309-3.252a4 4 0 0 1 5.557-5.557zm1.06 1.06l5.558-5.556a4 4 0 0 1-5.557 5.557"></svg:path>`,
})
export class FluentTabProhibited24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
