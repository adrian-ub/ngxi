import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCheckmarkCircle20Icon],svg[fluent-color-checkmark-circle-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCheckmarkCircle200)" d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path><svg:path fill="url(#fluentColorCheckmarkCircle201)" fill-rule="evenodd" d="M13.354 7.646a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L9 11.293l3.646-3.647a.5.5 0 0 1 .708 0" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorCheckmarkCircle200" x1="2.571" x2="13.613" y1="5" y2="16.472" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#22918B"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCheckmarkCircle201" x1="7.813" x2="8.95" y1="8.01" y2="13.63" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#E3FFD9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorCheckmarkCircle20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
