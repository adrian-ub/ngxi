import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardSpaceIcon],svg[mdi-keyboard-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h2v4h14v-4h2v4c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2z"></svg:path>`,
})
export class MdiKeyboardSpaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
