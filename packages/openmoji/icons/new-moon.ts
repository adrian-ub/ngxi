import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNewMoonIcon],svg[openmoji-new-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28"></svg:circle><svg:circle cx="36" cy="36" r="28" fill="#3f3f3f" stroke="#3f3f3f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle>`,
})
export class OpenmojiNewMoonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
