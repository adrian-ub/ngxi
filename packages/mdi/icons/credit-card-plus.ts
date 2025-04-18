import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardPlusIcon],svg[mdi-credit-card-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.09a5.5 5.5 0 0 1-.09-1a6 6 0 0 1 6-6a5.9 5.9 0 0 1 3 .81V6a2 2 0 0 0-2-2m0 7H4V8h16m0 7v3h3v2h-3v3h-2v-3h-3v-2h3v-3Z"></svg:path>`,
})
export class MdiCreditCardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
