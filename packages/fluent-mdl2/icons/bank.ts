import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BankIcon],svg[fluent-mdl2-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 768v768q0 1 9 27t22 67t30 89t30 90t24 73t13 38H0q2-7 12-37t25-73t30-91t29-88t23-67t9-28V768H0V640l960-480l960 480v128zM286 640h1348L960 303zm1250 128v768h128V768zm-256 0v768h128V768zm-256 0v768h128V768zm-256 0v768h128V768zm-256 0v768h128V768zm-256 768h128V768H256zm1486 256l-42-128H220l-42 128z"></svg:path>`,
})
export class FluentMdl2BankIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
