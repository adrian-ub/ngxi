import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsFileSystemOutlinedIcon],svg[eos-icons-file-system-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8h-2.59l-1-1H15a2.006 2.006 0 0 0-2 2v4a2.006 2.006 0 0 0 2 2h6a2.006 2.006 0 0 0 2-2v-3a2.006 2.006 0 0 0-2-2m0 5h-6V9h2l1 1h3Zm0 4h-2.59l-1-1H15a2.006 2.006 0 0 0-2 2v4a2.006 2.006 0 0 0 2 2h6a2.006 2.006 0 0 0 2-2v-3a2.006 2.006 0 0 0-2-2m0 5h-6v-4h2l1 1h3ZM8 19v-7h5v-2H8V8H6v13h7v-2zm2-18H7.41l-1-1H4a2.006 2.006 0 0 0-2 2v4a2.006 2.006 0 0 0 2 2h6a2.006 2.006 0 0 0 2-2V3a2.006 2.006 0 0 0-2-2m0 5H4V2h2l1 1h3Z"></svg:path>`,
})
export class EosIconsFileSystemOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
