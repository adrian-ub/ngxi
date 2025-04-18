import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileReplaceOutlineIcon],svg[mdi-file-replace-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 3l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v2l4-3l-4-3v2H4V3zm7 7v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2h2v2h11v-9h-5V7H8v6H6V7a2 2 0 0 1 2-2h8z"></svg:path>`,
})
export class MdiFileReplaceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
