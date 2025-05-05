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
  template: `<svg:path fill="currentColor" d="M13 18v-2h2v2z"></svg:path><svg:path fill="currentColor" d="M15.414 1H3v22h18V6.586zM14.5 7.5V3L19 7.5zM9.6 10v2H9v.6H7V10zm3.4 0v2.6h-2V12h-.6v-2zm-4 3.4v.6h.6v2H7v-2.6zm8 .6v6h-6v-6z"></svg:path>`,
})
export class TdesignFilePasteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
