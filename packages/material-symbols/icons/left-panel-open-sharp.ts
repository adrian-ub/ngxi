import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLeftPanelOpenSharpIcon],svg[material-symbols-left-panel-open-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 8v8l4-4zM10 19h9V5h-9zm-7 2V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsLeftPanelOpenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
