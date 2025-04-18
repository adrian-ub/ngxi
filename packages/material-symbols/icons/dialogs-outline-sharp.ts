import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDialogsOutlineSharpIcon],svg[material-symbols-dialogs-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16h8V8H8zm-5 5V3h18v18zm2-2h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsDialogsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
