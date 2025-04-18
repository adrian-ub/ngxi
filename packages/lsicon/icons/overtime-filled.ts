import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOvertimeFilledIcon],svg[lsicon-overtime-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 1 1 12 0h1a7 7 0 1 0-7 7v-1a6 6 0 0 1-6-6m5.5-4v3.5H4v1h4.5V4zm4 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M11 9.5v2h1v-2zm.5 2.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOvertimeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
