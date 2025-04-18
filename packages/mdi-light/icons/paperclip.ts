import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightPaperclipIcon],svg[mdi-light-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7v10.5a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 6 17.5V6a4 4 0 0 1 4-4a4 4 0 0 1 4 4v10.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9 16.5V7h1v9.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5V6a3 3 0 0 0-3-3a3 3 0 0 0-3 3v11.5C7 20 9 22 11.5 22s4.5-2 4.5-4.5V7z"></svg:path>`,
})
export class MdiLightPaperclipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
