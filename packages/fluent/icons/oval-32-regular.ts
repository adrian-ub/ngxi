import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOval32RegularIcon],svg[fluent-oval-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a8 8 0 1 0 0 16h8a8 8 0 1 0 0-16zM2 16C2 10.477 6.477 6 12 6h8c5.523 0 10 4.477 10 10s-4.477 10-10 10h-8C6.477 26 2 21.523 2 16"></svg:path>`,
})
export class FluentOval32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
