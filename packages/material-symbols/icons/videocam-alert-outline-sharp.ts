import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideocamAlertOutlineSharpIcon],svg[material-symbols-videocam-alert-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20h-6.325q.325-.45.563-.95T12.65 18H16V6H4v3.275q-.55.15-1.05.388t-.95.562V4h16v6.5l4-4v11l-4-4zM6 21q-2.075 0-3.537-1.463T1 16t1.463-3.537T6 11t3.538 1.463T11 16t-1.463 3.538T6 21m0-2q.2 0 .35-.15t.15-.35t-.15-.35T6 18t-.35.15t-.15.35t.15.35T6 19m-.5-2h1v-4h-1z"></svg:path>`,
})
export class MaterialSymbolsVideocamAlertOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
