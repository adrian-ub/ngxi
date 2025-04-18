import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillPrinterIcon],svg[quill-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 24h3a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3m0-14V5h12v5M9 17h14m-13 0v10h12V17"></svg:path>`,
})
export class QuillPrinterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
