import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxPasteIcon],svg[bx-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11V5c0-1.103-.897-2-2-2h-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H4c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2m-9 2v5H4V5h3v2h8V5h3v6h-5c-1.103 0-2 .897-2 2m2 7v-7h7l.001 7z"></svg:path>`,
})
export class BxPasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
