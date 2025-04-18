import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailAllRead16FilledIcon],svg[fluent-mail-all-read-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.24 1.061a.5.5 0 0 0-.48 0L1.7 3.821c-.202.11-.367.267-.487.453L7 7.43l5.787-3.156a1.34 1.34 0 0 0-.487-.452zM1 10V5.297l5.76 3.142a.5.5 0 0 0 .48 0L13 5.297V10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2m2.268 3A2 2 0 0 0 5 14h6a4 4 0 0 0 4-4V6a2 2 0 0 0-1-1.732V10a3 3 0 0 1-3 3z"></svg:path>`,
})
export class FluentMailAllRead16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
