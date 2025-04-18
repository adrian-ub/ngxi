import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWaningGibbousMoonIcon],svg[openmoji-waning-gibbous-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiWaningGibbousMoon0" d="M55 35a28 28 0 0 1-26.546 27.963A28 28 0 1 0 36 8q-.731 0-1.453.037A28.006 28.006 0 0 1 55 35"></svg:path></svg:defs><svg:use href="#openmojiWaningGibbousMoon0"></svg:use><svg:circle cx="36" cy="36" r="28" fill="#fcea2b" stroke="#3f3f3f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path fill="#3f3f3f" d="M55 35a28 28 0 0 1-26.546 27.963A28 28 0 1 0 36 8q-.731 0-1.453.037A28.006 28.006 0 0 1 55 35"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28"></svg:circle><svg:use href="#openmojiWaningGibbousMoon0"></svg:use></svg:g>`,
})
export class OpenmojiWaningGibbousMoonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
