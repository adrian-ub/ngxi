import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilePasteIcon],svg[tdesign-file-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V23H3zm16 8h-6V3H5v18h14zm-4-5.583V7h3.585zM7 10h2.6v2H9v.6H7zm3.4 0H13v2.6h-2V12h-.6zM9 14v-.6H7V16h2.6v-2zm2 0h6v6h-6zm2 2v2h2v-2z"></svg:path>`,
})
export class TdesignFilePasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
