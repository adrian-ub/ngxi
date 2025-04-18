import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiMateDrinkIcon],svg[arcticons-emoji-mate-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.803 20.938H33.9s4.922 6.324 5.048 10.44c.118 3.818-1.713 8.821-5.728 11.122H14.78c-4.015-2.3-5.846-7.308-5.728-11.122c.126-4.119 5.048-10.44 5.048-10.44h10.097m-1.154-4.491l2.67-7.154C26.561 6.952 28.17 5.5 29.916 5.5h6.395"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.1 20.938v-4.49h19.8v4.49"></svg:path>`,
})
export class ArcticonsEmojiMateDrinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
