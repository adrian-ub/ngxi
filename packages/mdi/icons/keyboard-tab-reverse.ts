import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardTabReverseIcon],svg[mdi-keyboard-tab-reverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v12h2m7-12l-6 6l6 6l1.41-1.42L8.83 13H23v-2H8.83l3.58-3.59z"></svg:path>`,
})
export class MdiKeyboardTabReverseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
