import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterZzIcon],svg[carbon-letter-zz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 15v-2h-8v2h5.5L17 21v2h8v-2h-5.49zM15 9H7v2h6L7 21v2h8v-2H9l6-10z"></svg:path>`,
})
export class CarbonLetterZzIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
