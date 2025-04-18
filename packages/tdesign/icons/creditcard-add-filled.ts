import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCreditcardAddFilledIcon],svg[tdesign-creditcard-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9V3H1v6zm0 2v2.39A5.5 5.5 0 0 0 15.39 21H1V11zM9 17v-2H4v2z"></svg:path><svg:path fill="currentColor" d="M21 17v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class TdesignCreditcardAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
