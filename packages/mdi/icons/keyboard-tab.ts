import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardTabIcon],svg[mdi-keyboard-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18h2V6h-2m-8.41 1.41L15.17 11H1v2h14.17l-3.58 3.58L13 18l6-6l-6-6z"></svg:path>`,
})
export class MdiKeyboardTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
