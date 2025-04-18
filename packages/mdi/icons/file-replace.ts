import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileReplaceIcon],svg[mdi-file-replace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12h5.5L14 6.5zM8 5h7l6 6v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3h5v2l4-3l-4-3v2H6V7a2 2 0 0 1 2-2m5.5-2H4v13h2v2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h7.5z"></svg:path>`,
})
export class MdiFileReplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
