import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsClipboardPlusOutlineIcon],svg[teenyicons-clipboard-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11 1.5h2.5v12a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-12H4M7.5 6v5M5 8.5h5M4.5.5h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"></svg:path>`,
})
export class TeenyiconsClipboardPlusOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
