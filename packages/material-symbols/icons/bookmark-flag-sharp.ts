import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBookmarkFlagSharpIcon],svg[material-symbols-bookmark-flag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 14H11v-3h4.5L14 9l1.5-2h-6zM5 21V3h14v18l-7-3z"></svg:path>`,
})
export class MaterialSymbolsBookmarkFlagSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
