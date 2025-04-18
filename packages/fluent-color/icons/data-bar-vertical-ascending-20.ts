import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataBarVerticalAscending20Icon],svg[fluent-color-data-bar-vertical-ascending-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataBarVerticalAscending200)" d="M17 5a2 2 0 1 0-4 0v10a2 2 0 1 0 4 0z"></svg:path><svg:path fill="url(#fluentColorDataBarVerticalAscending201)" d="M12 8a2 2 0 1 0-4 0v7a2 2 0 1 0 4 0z"></svg:path><svg:path fill="url(#fluentColorDataBarVerticalAscending202)" d="M7 11a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0z"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataBarVerticalAscending200" x1="16.474" x2="26.659" y1="-1.3" y2="4.133" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#16BBDA"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataBarVerticalAscending201" x1="8.386" x2="17.444" y1="3.312" y2="9.351" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#16BBDA"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataBarVerticalAscending202" x1="2.75" x2="9.859" y1="4.5" y2="11.017" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#16BBDA"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataBarVerticalAscending20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
