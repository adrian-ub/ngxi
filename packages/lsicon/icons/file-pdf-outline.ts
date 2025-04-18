import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFilePdfOutlineIcon],svg[lsicon-file-pdf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M4.5 12v-2m0 0V7.5H7V10zM15 7.5h-2.5V10m0 2v-2m0 0H15m-6.5 1.5H11v-4H8.5m0 4.5V7m3 6.5v1h-9v-13h6m0 0v3h3m-3-3H9L11.5 4v.5m0 0V6"></svg:path>`,
})
export class LsiconFilePdfOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
