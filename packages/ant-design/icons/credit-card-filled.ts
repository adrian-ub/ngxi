import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignCreditCardFilledIcon],svg[ant-design-credit-card-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 160H96c-17.7 0-32 14.3-32 32v160h896V192c0-17.7-14.3-32-32-32M64 832c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V440H64zm579-184c0-4.4 3.6-8 8-8h165c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H651c-4.4 0-8-3.6-8-8z"></svg:path>`,
})
export class AntDesignCreditCardFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
