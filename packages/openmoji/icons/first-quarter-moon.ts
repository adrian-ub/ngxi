import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFirstQuarterMoonIcon],svg[openmoji-first-quarter-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8 36a28 28 0 0 0 28 28V8A28 28 0 0 0 8 36"></svg:path><svg:path fill="#fcea2b" d="M49.452 44.876a1.5 1.5 0 0 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M64 36A28 28 0 0 0 36 8v56a28 28 0 0 0 28-28"></svg:path><svg:path fill="#3f3f3f" stroke="#3f3f3f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 36a28 28 0 0 0 28 28V8A28 28 0 0 0 8 36"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28"></svg:circle><svg:path d="M64 36A28 28 0 0 0 36 8v56a28 28 0 0 0 28-28"></svg:path></svg:g>`,
})
export class OpenmojiFirstQuarterMoonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
