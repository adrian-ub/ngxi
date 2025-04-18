import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF10Icon],svg[mdi-keyboard-f10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h6v2H4v2h3v2H4v4H2zm8 0h4v10h-2V9h-2zm8 0h2a2 2 0 0 1 2 2v6c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2m0 2v6h2V9z"></svg:path>`,
})
export class MdiKeyboardF10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
