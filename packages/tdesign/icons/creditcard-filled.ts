import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCreditcardFilledIcon],svg[tdesign-creditcard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9V3H1v6zm0 2v10H1V11zM9 17v-2H4v2z"></svg:path>`,
})
export class TdesignCreditcardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
