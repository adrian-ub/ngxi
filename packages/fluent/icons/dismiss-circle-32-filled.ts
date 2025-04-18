import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDismissCircle32FilledIcon],svg[fluent-dismiss-circle-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16m19.707-5.707a1 1 0 0 0-1.414 0L16 14.586l-4.293-4.293a1 1 0 1 0-1.414 1.414L14.586 16l-4.293 4.293a1 1 0 1 0 1.414 1.414L16 17.414l4.293 4.293a1 1 0 0 0 1.414-1.414L17.414 16l4.293-4.293a1 1 0 0 0 0-1.414"></svg:path>`,
})
export class FluentDismissCircle32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
