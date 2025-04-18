import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPrintOutlineIcon],svg[lsicon-print-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 2.5h8m-7.5 8h-2v-6h11v6h-2M4 6.5h3m-2.5 7h7v-5h-7z"></svg:path>`,
})
export class LsiconPrintOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
