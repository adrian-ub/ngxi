import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorTextBulletListSquare32Icon],svg[fluent-color-text-bullet-list-square-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorTextBulletListSquare320)" d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3z"></svg:path><svg:path fill="url(#fluentColorTextBulletListSquare321)" d="M12 10.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 5.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-1.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M14 10.5a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1m1 4.5a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm-1 6.5a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1"></svg:path><svg:defs><svg:lineargradient id="fluentColorTextBulletListSquare320" x1="3.929" x2="21.872" y1="7.875" y2="26.517" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorTextBulletListSquare321" x1="11.692" x2="21.978" y1="10.077" y2="34.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorTextBulletListSquare32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
