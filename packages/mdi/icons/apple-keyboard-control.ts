import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAppleKeyboardControlIcon],svg[mdi-apple-keyboard-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.78 11.78l-1.42 1.41L12 6.83l-6.36 6.36l-1.42-1.41L12 4z"></svg:path>`,
})
export class MdiAppleKeyboardControlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
