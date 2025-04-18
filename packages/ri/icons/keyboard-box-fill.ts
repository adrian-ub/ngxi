import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riKeyboardBoxFillIcon],svg[ri-keyboard-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m2 4v2h2V7zm0 4v2h2v-2zm0 4v2h14v-2zm4-4v2h2v-2zm0-4v2h2V7zm4 0v2h2V7zm4 0v2h2V7zm-4 4v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class RiKeyboardBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
