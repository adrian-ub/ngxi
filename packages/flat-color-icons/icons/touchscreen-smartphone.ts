import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsTouchscreenSmartphoneIcon],svg[flat-color-icons-touchscreen-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E38939" d="M12 40V8c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#FFF3E0" d="M32 7H16c-.6 0-1 .4-1 1v29c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1"></svg:path><svg:circle cx="24" cy="41" r="1.5" fill="#A6642A"></svg:circle><svg:circle cx="24" cy="23" r="2" fill="#E91E63"></svg:circle><svg:circle cx="24" cy="23" r="4" fill="none" stroke="#F48FB1" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="24" cy="23" r="6.5" fill="none" stroke="#F8BBD0" stroke-miterlimit="10"></svg:circle>`,
})
export class FlatColorIconsTouchscreenSmartphoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
