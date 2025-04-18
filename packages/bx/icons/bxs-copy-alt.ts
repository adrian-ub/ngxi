import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsCopyAltIcon],svg[bx-bxs-copy-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" fill="currentColor"></svg:path><svg:path d="M4 22h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2zm2-10h6v2H6v-2zm0 4h6v2H6v-2z" fill="currentColor"></svg:path>`,
})
export class BxBxsCopyAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
