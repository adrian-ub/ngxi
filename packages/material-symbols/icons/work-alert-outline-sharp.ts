import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkAlertOutlineSharpIcon],svg[material-symbols-work-alert-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19v-.375zV8zm-2 2V6h6V2h8v4h6v6.275q-.45-.325-.95-.562T20 11.3V8H4v11h7.075q.075.525.225 1.025t.375.975zm8-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m0-2q.2 0 .35-.15t.15-.35t-.15-.35T18 20t-.35.15t-.15.35t.15.35t.35.15m-.5-2h1v-4h-1z"></svg:path>`,
})
export class MaterialSymbolsWorkAlertOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
