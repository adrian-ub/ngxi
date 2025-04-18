import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSmbShareOutlineSharpIcon],svg[material-symbols-smb-share-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.125 13H16.2q.65 0 1.1-.45t.45-1.1t-.45-1.112t-1.1-.463h-.05q-.125-.8-.725-1.338T14 8q-.65 0-1.175.338t-.8.912q-.75.05-1.263.588t-.512 1.287t.538 1.313t1.337.562M1 21V6h2v13h17v2zm4-4V2h7l2 2h9v13zm2-2h14V6h-7.825l-2-2H7zm0 0V4z"></svg:path>`,
})
export class MaterialSymbolsSmbShareOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
