import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsModeCommentOutlineSharpIcon],svg[material-symbols-mode-comment-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18V2h20v20l-4-4zm2-2h14.85L20 17.125V4H4zm0 0V4z"></svg:path>`,
})
export class MaterialSymbolsModeCommentOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
