import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiAxeIcon],svg[arcticons-emoji-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.468 8.364v5.012c-6.468 0-10.78.717-12.936 2.865V5.5C19.688 7.648 24 8.364 30.468 8.364"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.772 13.528l-.021 15.125l.864 2.594l-.018 11.246l-.869.001l-2.604.005l-.868.001l.018-11.246l.872-2.597l.021-14.78zm-2.626-5.636l.021-2.236l2.604-.004l-.02 2.235z"></svg:path>`,
})
export class ArcticonsEmojiAxeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
