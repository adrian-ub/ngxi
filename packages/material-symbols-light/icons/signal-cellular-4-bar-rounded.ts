import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellular4BarRoundedIcon],svg[material-symbols-light-signal-cellular-4-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.598 21q-.315 0-.488-.204q-.172-.204-.172-.475q0-.137.037-.235t.148-.209L19.877 4.123q.112-.111.21-.148t.233-.036q.272 0 .476.172t.204.487v15.479q0 .385-.27.654t-.653.269z"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellular4BarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
