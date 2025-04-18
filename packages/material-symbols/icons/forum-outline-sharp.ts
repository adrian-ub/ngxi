import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsForumOutlineSharpIcon],svg[material-symbols-forum-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18v-3h13V6h3v16l-4-4zm-4-1V2h15v11H6zm2-4.825L5.175 11H15V4H4zM4 11V4z"></svg:path>`,
})
export class MaterialSymbolsForumOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
