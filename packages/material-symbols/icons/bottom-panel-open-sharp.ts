import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBottomPanelOpenSharpIcon],svg[material-symbols-bottom-panel-open-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11.5h8l-4-4zM5 14h14V5H5zm-2 7V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsBottomPanelOpenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
