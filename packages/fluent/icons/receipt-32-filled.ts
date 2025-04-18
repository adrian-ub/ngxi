import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReceipt32FilledIcon],svg[fluent-receipt-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h13.5A3.25 3.25 0 0 1 23 6.25V19h6v5.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM23 27h1.5a2.5 2.5 0 0 0 2.5-2.5V21h-4zM8 10a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H9a1 1 0 0 0-1 1m1 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 7a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2H9a1 1 0 0 0-1 1"></svg:path>`,
})
export class FluentReceipt32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
