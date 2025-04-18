import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDismiss28FilledIcon],svg[fluent-dismiss-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.293 4.293a1 1 0 1 1 1.414 1.414L15.414 14l8.293 8.293a1 1 0 0 1-1.414 1.414L14 15.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L12.586 14L4.293 5.707a1 1 0 0 1 1.414-1.414L14 12.586z"></svg:path>`,
})
export class FluentDismiss28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
