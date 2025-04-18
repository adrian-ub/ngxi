import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhShoppingbagIcon],svg[whh-shoppingbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1023H64q-27 0-45.5-18.5T0 959V319q0-26 18.5-45T64 255h128V127L320 0v255h384V0l128 127v128h128q26 0 45 19t19 45v640q0 27-18.5 45.5T960 1023M384 0h256v127H384z"></svg:path>`,
})
export class WhhShoppingbagIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
