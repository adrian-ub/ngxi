import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsClipboardXOutlineIcon],svg[teenyicons-clipboard-x-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11 1.5h2.5v12a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-12H4m1.5 5l4 4m-4 0l4-4m-5-6h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"></svg:path>`,
})
export class TeenyiconsClipboardXOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
