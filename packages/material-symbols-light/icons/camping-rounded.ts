import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCampingRoundedIcon],svg[material-symbols-light-camping-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20.692v-2.5q0-.267.08-.51t.243-.459l8.062-10.846l-.823-1.108q-.068-.078-.089-.18q-.021-.1-.006-.192q.016-.091.067-.18q.052-.088.131-.155q.177-.135.366-.104t.323.207l.646.883l.646-.883q.135-.176.333-.207t.375.104t.208.332t-.104.375l-.823 1.108l8.042 10.846q.162.218.242.46t.081.51v2.5q0 .347-.23.577t-.578.23H3.808q-.349 0-.578-.23T3 20.692m4.879-.192h8.242L12 14.725z"></svg:path>`,
})
export class MaterialSymbolsLightCampingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
