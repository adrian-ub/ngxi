import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsKeyboardCommandIcon],svg[proicons-keyboard-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 5.751a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v3h-3a3 3 0 0 1-3-3m0 12.498a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v-3h-3a3 3 0 0 0-3 3m18.5-12.498a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v3h3a3 3 0 0 0 3-3m0 12.498a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3v-3h3a3 3 0 0 1 3 3M8.75 8.751h6.5v6.5h-6.5z"></svg:path>`,
})
export class ProiconsKeyboardCommandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
