import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularNullRoundedIcon],svg[material-symbols-light-signal-cellular-null-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.598 21q-.444 0-.62-.401t.145-.722L19.877 4.123q.321-.321.722-.145t.401.62v15.479q0 .394-.264.658q-.265.265-.659.265zm.823-1H20V5.427z"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularNullRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
