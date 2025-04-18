import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsClipboardNoAccessOutlineIcon],svg[teenyicons-clipboard-no-access-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11 1.5h2.5v12a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-12H4m5.5 5l-4 4m-1-10h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"></svg:path>`,
})
export class TeenyiconsClipboardNoAccessOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
