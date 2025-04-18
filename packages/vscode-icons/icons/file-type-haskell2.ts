import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeHaskell2Icon],svg[vscode-icons-file-type-haskell2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeHaskell20" x1=".996" x2=".951" y1="-206.057" y2="-206.057" gradientTransform="matrix(259.941 0 0 -183.487 -237.941 -37792.788)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#faba09"></svg:stop><svg:stop offset="1" stop-color="#b42c01"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#vscodeIconsFileTypeHaskell20)" d="M2 25.882L8.588 16L2 6.118h4.941L13.529 16l-6.588 9.882Zm6.588 0L15.177 16L8.588 6.118h4.941l13.177 19.764h-4.941l-4.117-6.176l-4.118 6.176Zm15.922-5.764l-2.2-3.294H30v3.294Zm-3.294-4.941l-2.2-3.294H30v3.294Z"></svg:path>`,
})
export class VscodeIconsFileTypeHaskell2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
