import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMedalIcon],svg[whh-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.717 64l-219 382q-80-87-193-114l153-268q15-26 44-45t56-19h129q27 0 36 19t-6 45m-183 641q0 87-42.5 160.5T673.717 982t-161 43t-161-43t-116.5-116.5t-42.5-160.5t42.5-161t116.5-117t161-43t161 43t116.5 117t42.5 161m-823-641q-15-26-6-45t36-19h129q27 0 56 19t44 45l153 268q-114 27-193 114z"></svg:path>`,
})
export class WhhMedalIcon {
  readonly viewBox = input("0 0 1026 1025")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
