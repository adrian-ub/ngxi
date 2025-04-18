import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiEvergreenTreeIcon],svg[arcticons-emoji-evergreen-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 34.866l12.23.78l-5.793-10.853l3.405.55l-5.327-8.99l3.176.222L24.001 5.5l-7.365 11.314l2.849-.461l-5.557 8.99l3.635-.55l-5.792 10.852zm0 0V42.5"></svg:path>`,
})
export class ArcticonsEmojiEvergreenTreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
