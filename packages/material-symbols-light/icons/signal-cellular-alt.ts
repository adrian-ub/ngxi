import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularAltIcon],svg[material-symbols-light-signal-cellular-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19v-4h1.616v4zm5.808 0v-9h1.615v9zm5.577 0V5H19v14z"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
