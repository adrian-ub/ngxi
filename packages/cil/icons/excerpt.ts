import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilExcerptIcon],svg[cil-excerpt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 344h480v32H16zm0-191.667h480v32H16zM16 248h328v32H16zm0-192h384v32H16zm0 384h32v32H16zm224 0h32v32h-32zm-112 0h32v32h-32z"></svg:path>`,
})
export class CilExcerptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
