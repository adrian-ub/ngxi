import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktopMultipleBottom20FilledIcon],svg[fluent-tab-desktop-multiple-bottom-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.05 4h7.45A3.5 3.5 0 0 1 16 7.5v7.45a2.5 2.5 0 0 0 2-2.45V6a4 4 0 0 0-4-4H7.5a2.5 2.5 0 0 0-2.45 2M2 7.5A2.5 2.5 0 0 1 4.5 5h8A2.5 2.5 0 0 1 15 7.5v8a2.5 2.5 0 0 1-2.5 2.5H11v-2.5A1.5 1.5 0 0 0 9.5 14H2zm8 8V18H4.5A2.5 2.5 0 0 1 2 15.5V15h7.5a.5.5 0 0 1 .5.5"></svg:path>`,
})
export class FluentTabDesktopMultipleBottom20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
