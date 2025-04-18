import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBrunchDiningOutlineRoundedIcon],svg[material-symbols-brunch-dining-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20h14v1q0 .425-.288.713T15 22H3q-.425 0-.712-.288T2 21zm0-2v-1q0-.425.288-.712T3 16h4v-1q0-.425.288-.712T8 14h2q.425 0 .713.288T11 15v1h4q.425 0 .713.288T16 17v1zm16-2.1q-.9-1.025-1.45-2.025T16 11.45V3q0-.425.288-.712T17 2h4q.425 0 .713.288T22 3v8.45q0 1.425-.537 2.438T20 15.9V20h1q.425 0 .713.288T22 21t-.288.713T21 22h-2q-.425 0-.712-.288T18 21zM18 8h2V4h-2zm1 6.05q.45-.525.725-1.2t.275-1.4V10h-2v1.45q0 .725.25 1.4t.75 1.2m0 0"></svg:path>`,
})
export class MaterialSymbolsBrunchDiningOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
