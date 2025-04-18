import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReceipt16FilledIcon],svg[fluent-receipt-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.75C2 2.784 2.784 2 3.75 2h5.5c.966 0 1.75.784 1.75 1.75V10h3v1.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM11 13h.5a1.5 1.5 0 0 0 1.5-1.5V11h-2zM4.5 5.5A.5.5 0 0 0 5 6h3a.5.5 0 0 0 0-1H5a.5.5 0 0 0-.5.5m.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-.5 3a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 0-1H5a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class FluentReceipt16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
