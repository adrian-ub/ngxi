import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineKeyboardIcon],svg[icon-park-outline-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15 19a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m9-8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m9-8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 33h14"></svg:path></svg:g>`,
})
export class IconParkOutlineKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
