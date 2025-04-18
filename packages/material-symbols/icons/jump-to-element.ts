import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsJumpToElementIcon],svg[material-symbols-jump-to-element-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13V9h2v2h2v2zm7 0v-2h2V9h2v4zm-7-7V2h4v2h-2v2zm9 0V4h-2V2h4v4zM3.4 22L2 20.6L7.6 15H3v-2h8v8H9v-4.6z"></svg:path>`,
})
export class MaterialSymbolsJumpToElementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
