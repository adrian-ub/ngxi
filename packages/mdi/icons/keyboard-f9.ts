import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF9Icon],svg[mdi-keyboard-f9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h6v2H7v2h3v2H7v4H5zm12 10h-4v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v6c0 1.11-.89 2-2 2m0-6V9h-2v2z"></svg:path>`,
})
export class MdiKeyboardF9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
