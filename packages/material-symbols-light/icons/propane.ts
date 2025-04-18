import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPropaneIcon],svg[material-symbols-light-propane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 7h5v-.577q0-.27-.173-.442q-.173-.173-.442-.173h-3.77q-.269 0-.442.173t-.173.442zM7 19v-2q-2.077 0-3.538-1.457T2 12.005T3.458 8.46T7 7h1.5v-.577q0-.69.463-1.153t1.153-.462h3.769q.69 0 1.153.462t.462 1.153V7H17q2.083 0 3.542 1.457T22 11.995t-1.458 3.544Q19.083 17 17 17v2h-1v-2H8v2z"></svg:path>`,
})
export class MaterialSymbolsLightPropaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
