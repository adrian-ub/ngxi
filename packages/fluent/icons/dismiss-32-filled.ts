import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDismiss32FilledIcon],svg[fluent-dismiss-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.113 4.116a1.25 1.25 0 0 1 1.768 1.768L17.766 15.999l10.115 10.114a1.25 1.25 0 1 1-1.768 1.768L16 17.766L5.884 27.881a1.25 1.25 0 1 1-1.768-1.768L14.231 16L4.116 5.884a1.25 1.25 0 1 1 1.768-1.768l10.115 10.115z"></svg:path>`,
})
export class FluentDismiss32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
