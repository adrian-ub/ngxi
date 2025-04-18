import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDropboxIcon],svg[mdi-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 6.2l5 3.19l5-3.19L8 3zm10 0l5 3.19l5-3.19L18 3zM3 12.55l5 3.19l5-3.19l-5-3.2zm15-3.2l-5 3.2l5 3.19l5-3.19zM8.03 16.8l5.01 3.2l5-3.2l-5-3.19z"></svg:path>`,
})
export class MdiDropboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
