import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPotatoIcon],svg[twemoji-potato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D99E82" d="M.25 13c0-7.158 10-15 18-8c2.714 2.375 5 4 5 7c12-2 13.703 8.892 12 14c-1 3-5.868 11.059-24 3c-9-4-11-11.616-11-16"></svg:path><svg:path fill="#C1694F" d="M17.71 14.822c1.827-1.737 3.628-2.498 5.649-2.838l-.109.015c0-.858-.204-1.597-.534-2.28c-2.074.772-4.288 2.281-5.006 5.103"></svg:path><svg:circle cx="10.25" cy="16" r="1" fill="#C1694F"></svg:circle><svg:circle cx="30.25" cy="26" r="1" fill="#C1694F"></svg:circle><svg:circle cx="14.75" cy="25.5" r="1.5" fill="#C1694F"></svg:circle><svg:circle cx="5.75" cy="19.5" r="1.5" fill="#C1694F"></svg:circle>`,
})
export class TwemojiPotatoIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
