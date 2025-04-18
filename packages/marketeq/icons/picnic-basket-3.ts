import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPicnicBasket3Icon],svg[marketeq-picnic-basket-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M32.042 43.75H17.958a8.333 8.333 0 0 1-8.333-7.5L8.333 22.917h33.334L40.333 36.25a8.334 8.334 0 0 1-8.291 7.5M25 6.25a14.583 14.583 0 0 0-14.583 14.583v2.084h29.166v-2.084A14.583 14.583 0 0 0 25 6.25"></svg:path><svg:path stroke="#344054" d="M6.25 22.917h37.5"></svg:path></svg:g>`,
})
export class MarketeqPicnicBasket3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
