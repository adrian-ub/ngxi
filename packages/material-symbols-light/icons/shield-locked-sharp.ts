import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShieldLockedSharpIcon],svg[material-symbols-light-shield-locked-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.48 21v-4.538h1v-1q0-.748.511-1.259t1.259-.51t1.259.51t.51 1.259v1H21V21zm1.77-4.538h2v-1q0-.425-.288-.713t-.712-.288t-.712.288t-.288.713zm-5.25 4.5q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 .106-.003.212l-.008.211q-.187-.03-.368-.046q-.18-.015-.371-.015q-2.094.019-3.547 1.469t-1.453 3.53v4.02q-.297.16-.61.28t-.64.2"></svg:path>`,
})
export class MaterialSymbolsLightShieldLockedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
