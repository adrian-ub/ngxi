import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileShredFillIcon],svg[ri-file-shred-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12v2H2v-2h2V2.995c0-.55.445-.995.996-.995H15l5 5v5zM3 16h2v6H3zm16 0h2v6h-2zm-4 0h2v6h-2zm-4 0h2v6h-2zm-4 0h2v6H7z"></svg:path>`,
})
export class RiFileShredFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
