import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWindowClosedIcon],svg[material-symbols-window-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V3h16v18zm3-10h4v-1h2v1h4V6H7zm0 7h10v-5H7zm-1 1h12V5H6z"></svg:path>`,
})
export class MaterialSymbolsWindowClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
