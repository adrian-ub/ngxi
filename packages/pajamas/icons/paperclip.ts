import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasPaperclipIcon],svg[pajamas-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.414 3.05L4.085 8.38a3 3 0 0 0 4.243 4.242l2.403-2.403a.75.75 0 1 1 1.06 1.06l-2.403 2.404a4.5 4.5 0 0 1-6.364-6.364l5.33-5.33a3.25 3.25 0 0 1 4.596 4.597l-5.33 5.329a2 2 0 0 1-2.828-2.828l5.33-5.33a.75.75 0 0 1 1.06 1.061l-5.33 5.33a.5.5 0 1 0 .708.706l5.33-5.329A1.75 1.75 0 0 0 9.413 3.05Z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasPaperclipIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
