import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWaxingGibbousMoonIcon],svg[openmoji-waxing-gibbous-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiWaxingGibbousMoon0" d="M17 37A28 28 0 0 1 43.547 9.037A28 28 0 1 0 36 64q.731 0 1.454-.037A28.006 28.006 0 0 1 17 37"></svg:path></svg:defs><svg:use href="#openmojiWaxingGibbousMoon0"></svg:use><svg:circle cx="36" cy="36" r="28" fill="#fcea2b" stroke="#3f3f3f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path fill="#3f3f3f" d="M17 37A28 28 0 0 1 43.547 9.037A28 28 0 1 0 36 64q.731 0 1.454-.037A28.006 28.006 0 0 1 17 37"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28"></svg:circle><svg:use href="#openmojiWaxingGibbousMoon0"></svg:use></svg:g>`,
})
export class OpenmojiWaxingGibbousMoonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
