import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsTypedocIcon],svg[file-icons-typedoc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234 3l232 125v254L233 509V257L0 129zM0 380.55l214.076-112.321L0 151.672z"></svg:path>`,
})
export class FileIconsTypedocIcon {
  readonly viewBox = input("0 0 467 512")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
