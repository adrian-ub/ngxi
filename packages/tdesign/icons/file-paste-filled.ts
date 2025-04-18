import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilePasteFilledIcon],svg[tdesign-file-paste-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18v-2h2v2z"></svg:path><svg:path fill="currentColor" d="M3 1h10v8h8v14H3zm6.6 9H7v2.6h2V12h.6zm3.4 0h-2.6v2h.6v.6h2zm-4 3.4H7V16h2.6v-2H9zm8 6.6v-6h-6v6z"></svg:path><svg:path fill="currentColor" d="M21 6.586V7h-6V1h.414z"></svg:path>`,
})
export class TdesignFilePasteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
