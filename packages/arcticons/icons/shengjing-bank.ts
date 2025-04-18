import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShengjingBankIcon],svg[arcticons-shengjing-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 5.5v12h-2a2 2 0 0 0-2 2v2h-12v-7a9 9 0 0 1 9-9zm5 0v12h2a2 2 0 0 1 2 2v2h12v-7a9 9 0 0 0-9-9zm0 37v-12h2a2 2 0 0 0 2-2v-2h12v7a9 9 0 0 1-9 9zm-5 0v-12h-2a2 2 0 0 1-2-2v-2h-12v7a9 9 0 0 0 9 9z"></svg:path>`,
})
export class ArcticonsShengjingBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
