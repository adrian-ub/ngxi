import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineKeyboardOptionKeyIcon],svg[ic-outline-keyboard-option-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z"></svg:path>`,
})
export class IcOutlineKeyboardOptionKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
