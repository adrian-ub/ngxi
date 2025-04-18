import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChromeRestoreSharpIcon],svg[material-symbols-chrome-restore-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16V4h12v12Zm-4 4V8.525h2V18h9.475v2Z"></svg:path>`,
})
export class MaterialSymbolsChromeRestoreSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
