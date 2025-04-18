import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSwitchSharpIcon],svg[material-symbols-switch-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17h8V7H8zm2-2V9h4v6zm1-3h2v-2h-2zm-8 9V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsSwitchSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
