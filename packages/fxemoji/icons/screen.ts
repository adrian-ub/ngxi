import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiScreenIcon],svg[fxemoji-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00B1FF" d="M29.303 100.064h454.689c9.389 0 16.999 7.611 16.999 16.999v288.19c0 9.389-7.611 16.999-16.999 16.999H29.303c-9.389 0-16.999-7.611-16.999-16.999v-288.19c-.001-9.388 7.61-16.999 16.999-16.999"></svg:path><svg:path fill="#59CAFC" d="M29.303 100.064h454.689c9.389 0 16.999 7.611 16.999 16.999v288.19c0 9.389-7.611 16.999-16.999 16.999"></svg:path>`,
})
export class FxemojiScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
