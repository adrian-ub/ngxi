import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileShredLineIcon],svg[ri-file-shred-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h12V8h-4V4H6zm-2 0V2.995c0-.55.445-.995.996-.995H15l5 5v5h2v2H2v-2zm-1 4h2v6H3zm16 0h2v6h-2zm-4 0h2v6h-2zm-4 0h2v6h-2zm-4 0h2v6H7z"></svg:path>`,
})
export class RiFileShredLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
