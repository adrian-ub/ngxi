import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHistory28Icon],svg[fluent-color-history-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHistory280)" d="M14 7a1 1 0 0 1 1 1v5h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"></svg:path><svg:path fill="url(#fluentColorHistory281)" d="M14 5a8.96 8.96 0 0 0-5.658 2H10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1.013V4a1 1 0 0 1 2 0v1.514A10.96 10.96 0 0 1 14 3c6.075 0 11 4.925 11 11s-4.925 11-11 11S3 20.075 3 14q0-.555.054-1.099a1 1 0 1 1 1.99.198Q5 13.543 5 14a9 9 0 1 0 9-9"></svg:path><svg:defs><svg:lineargradient id="fluentColorHistory280" x1="11.988" x2="26.736" y1="22.267" y2="16.667" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D373FC"></svg:stop><svg:stop offset="1" stop-color="#6D37CD"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHistory281" x1="3" x2="8.905" y1="4.294" y2="29.019" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHistory28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
