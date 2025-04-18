import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipHorizontal32FilledIcon],svg[fluent-flip-horizontal-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.799 27.43a1.25 1.25 0 0 1-1.049.57h-10.5c-.69 0-1.25-.56-1.25-1.25V3.25a1.25 1.25 0 0 1 2.391-.51l10.5 23.5a1.25 1.25 0 0 1-.092 1.19M19.5 9.112V25.5h7.322zM3 28a1 1 0 0 1-.91-1.416l11-24A1 1 0 0 1 15 3v24a1 1 0 0 1-1 1z"></svg:path>`,
})
export class FluentFlipHorizontal32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
