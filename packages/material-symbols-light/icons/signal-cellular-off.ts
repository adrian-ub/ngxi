import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularOffIcon],svg[material-symbols-light-signal-cellular-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.987 22.408L19.579 21H3l8.292-8.292L3.65 5.07l.708-.713L21.7 21.7zM21 18.2l-7.6-7.6L21 3z"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
