import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddCommentOutlineSharpIcon],svg[material-symbols-light-add-comment-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 13.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zM3 20.077V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4z"></svg:path>`,
})
export class MaterialSymbolsLightAddCommentOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
