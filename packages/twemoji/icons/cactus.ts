import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCactusIcon],svg[twemoji-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#77B255" d="M30 4a4 4 0 0 0-4 4v9.125c0 1.086-.887 1.96-2 2.448V6a6 6 0 0 0-12 0v17.629c-1.122-.475-2-1.371-2-2.504V16a4 4 0 0 0-8 0v7c0 2.209 1.75 3.875 3.375 4.812c1.244.718 4.731 1.6 6.625 1.651V33c0 3.313 12 3.313 12 0v-7.549c1.981-.119 5.291-.953 6.479-1.639C32.104 22.875 34 21.209 34 19V8a4 4 0 0 0-4-4"></svg:path><svg:g fill="#3E721D"><svg:circle cx="12" cy="6" r="1"></svg:circle><svg:circle cx="23" cy="3" r="1"></svg:circle><svg:circle cx="21" cy="9" r="1"></svg:circle><svg:circle cx="14" cy="16" r="1"></svg:circle><svg:circle cx="20" cy="20" r="1"></svg:circle><svg:circle cx="13" cy="26" r="1"></svg:circle><svg:circle cx="5" cy="27" r="1"></svg:circle><svg:circle cx="9" cy="20" r="1"></svg:circle><svg:circle cx="2" cy="18" r="1"></svg:circle><svg:circle cx="34" cy="8" r="1"></svg:circle><svg:circle cx="28" cy="11" r="1"></svg:circle><svg:circle cx="32" cy="16" r="1"></svg:circle><svg:circle cx="29" cy="24" r="1"></svg:circle><svg:circle cx="22" cy="30" r="1"></svg:circle></svg:g>`,
})
export class TwemojiCactusIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
