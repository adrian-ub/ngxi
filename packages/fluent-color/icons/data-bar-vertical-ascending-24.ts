import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataBarVerticalAscending24Icon],svg[fluent-color-data-bar-vertical-ascending-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataBarVerticalAscending240)" d="M20.5 5.25a2.25 2.25 0 0 0-4.5 0v13.5a2.25 2.25 0 0 0 4.5 0z"></svg:path><svg:path fill="url(#fluentColorDataBarVerticalAscending241)" d="M14 9.25a2.25 2.25 0 0 0-4.5 0v9.5a2.25 2.25 0 0 0 4.5 0z"></svg:path><svg:path fill="url(#fluentColorDataBarVerticalAscending242)" d="M7.5 13.25a2.25 2.25 0 0 0-4.5 0v5.5a2.25 2.25 0 0 0 4.5 0z"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataBarVerticalAscending240" x1="19.908" x2="31.994" y1="-2.529" y2="3.112" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#16BBDA"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataBarVerticalAscending241" x1="9.934" x2="20.859" y1="3.58" y2="10.018" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#16BBDA"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataBarVerticalAscending242" x1="2.719" x2="11.477" y1="5.375" y2="12.6" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#16BBDA"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataBarVerticalAscending24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
