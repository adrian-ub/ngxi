import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFanIndirectSharpIcon],svg[material-symbols-light-fan-indirect-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21l-2.73-2.692l.707-.708l1.523 1.479v-6.502h1v6.502l1.517-1.479l.714.708zm-7.27-2.654L2 15.654l2.73-2.692l.709.694l-1.537 1.498h3.714V9.712h1v6.442H3.902l1.537 1.484zm14.54 0l-.695-.707l1.523-1.485h-4.713V9.712h1v5.442h3.713l-1.523-1.498l.694-.694L22 15.654zM3 10.873V4h18v6.873l-1-1V5H4v4.873z"></svg:path>`,
})
export class MaterialSymbolsLightFanIndirectSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
