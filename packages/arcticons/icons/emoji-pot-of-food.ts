import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiPotOfFoodIcon],svg[arcticons-emoji-pot-of-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 23.989c0 10.217 8.283 18.5 18.5 18.5s18.5-8.283 18.5-18.5zM19.562 6.028a3.16 3.16 0 0 0 .906 1.967a3.19 3.19 0 0 1 0 4.51a3.19 3.19 0 0 0 0 4.511a3.19 3.19 0 0 1 0 4.51m2.62-16.014c-.064.891.23 1.802.912 2.483a3.19 3.19 0 0 1 0 4.51a3.19 3.19 0 0 0 0 4.511a3.19 3.19 0 0 1 0 4.51M26.559 5.67a3.17 3.17 0 0 0 .927 2.325a3.19 3.19 0 0 1 0 4.51a3.19 3.19 0 0 0 0 4.511a3.19 3.19 0 0 1 0 4.51M5.5 17.06l6.52 6.928"></svg:path>`,
})
export class ArcticonsEmojiPotOfFoodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
