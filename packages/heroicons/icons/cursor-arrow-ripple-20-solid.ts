import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsCursorArrowRipple20SolidIcon],svg[heroicons-cursor-arrow-ripple-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.111 11.89A5.5 5.5 0 1 1 15.501 8A.75.75 0 0 0 17 8a7 7 0 1 0-11.95 4.95a.75.75 0 0 0 1.06-1.06"></svg:path><svg:path d="M8.232 6.232a2.5 2.5 0 0 0 0 3.536a.75.75 0 1 1-1.06 1.06A4 4 0 1 1 14 8a.75.75 0 0 1-1.5 0a2.5 2.5 0 0 0-4.268-1.768"></svg:path><svg:path d="M10.766 7.51a.75.75 0 0 0-1.37.365l-.492 6.861a.75.75 0 0 0 1.204.65l1.043-.799l.985 3.678a.75.75 0 0 0 1.45-.388l-.978-3.646l1.292.204a.75.75 0 0 0 .74-1.16z"></svg:path></svg:g>`,
})
export class HeroiconsCursorArrowRipple20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
