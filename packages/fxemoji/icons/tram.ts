import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiTramIcon],svg[fxemoji-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#132028" d="m312 27.429l-11-11V16h-90v.429l-11 11L244.571 72L232 84.571L243.429 96L256 83.429L268.571 96L280 84.571L267.429 72z"></svg:path><svg:path fill="#FF473E" d="M128 64h256v368H128z"></svg:path><svg:path fill="#F9F9F7" d="M136 72h240v224H136z"></svg:path><svg:path fill="#FFD469" d="M276 340c0 11.046-8.954 20-20 20s-20-8.954-20-20s8.954-20 20-20s20 8.954 20 20m-97-4c-6.627 0-12 5.373-12 12s5.373 12 12 12s12-5.373 12-12s-5.373-12-12-12m152 0c-6.627 0-12 5.373-12 12s5.373 12 12 12s12-5.373 12-12s-5.373-12-12-12"></svg:path><svg:path fill="#132028" d="M353 118H161V86h192zm-101 16H144v144h108zm8 0v144h108V134zm-51 362l16-64h-32l-64 64zm175 0l-64-64h-32l16 64z"></svg:path><svg:path fill="#FFF" d="M227.429 32h57.142L256 60.571z"></svg:path>`,
})
export class FxemojiTramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
