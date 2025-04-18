import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCookingIcon],svg[twemoji-cooking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#292F33" d="M34.238 27.931c-.704-.703-3.857-2.661-6.935-4.364A14.9 14.9 0 0 0 30 15c0-8.284-6.716-15-15-15C6.715 0 0 6.716 0 15s6.715 15 15 15c3.159 0 6.086-.981 8.504-2.649c1.705 3.081 3.666 6.24 4.37 6.944C29.288 35.709 31 36.002 32 36c1.177-.002 4.055-2.881 4-4c-.049-.999-.348-2.655-1.762-4.069"></svg:path><svg:circle cx="15" cy="15" r="12" fill="#66757F"></svg:circle><svg:path fill="#F5F8FA" d="M16 25c4.863-1.533 4-5 4-9s4.001-6.708.334-9.75c-2.177-1.806-6.75-2.417-8.875-1.625C9.506 5.352 7 6.833 7 9.833s-.058 2.927-1.708 5.625C2.667 19.75 9.125 27.167 16 25"></svg:path><svg:circle cx="13" cy="18" r="4" fill="#FFAC33"></svg:circle>`,
})
export class TwemojiCookingIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
