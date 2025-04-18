import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8BankCardIcon],svg[icons8-bank-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.565 0 1 .435 1 1v2H5v2h23v10c0 .565-.435 1-1 1H5c-.565 0-1-.435-1-1V9c0-.565.435-1 1-1"></svg:path>`,
})
export class Icons8BankCardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
