import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDismiss28RegularIcon],svg[fluent-dismiss-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.47 4.47a.75.75 0 1 1 1.06 1.06L15.06 14l8.47 8.47a.75.75 0 1 1-1.06 1.06L14 15.06l-8.47 8.47a.75.75 0 0 1-1.06-1.06L12.94 14L4.47 5.53a.75.75 0 0 1 1.06-1.06L14 12.94z"></svg:path>`,
})
export class FluentDismiss28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
