import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsSymlinkOutlinedIcon],svg[eos-icons-symlink-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 12l4 3.5l-4 3.5v-2a6.96 6.96 0 0 0-6 3c.56-2.67 2.11-5.46 6-6Zm0-8l5 5h-5Z"></svg:path><svg:path fill="currentColor" d="M14.68 0H4a2.006 2.006 0 0 0-2 2v20a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V7.15ZM20 22H4V2h9.83L20 8Z"></svg:path>`,
})
export class EosIconsSymlinkOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
