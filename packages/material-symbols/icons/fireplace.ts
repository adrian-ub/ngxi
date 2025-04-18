import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFireplaceIcon],svg[material-symbols-fireplace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.6 16.95q.325.275.688.388t.712.112q.725 0 1.313-.462T14 15.65q.125-1.175-.725-1.737T12 12.45q-.125.35-.125.65t.075.65q.075.425.175.8t.025.8q-.125.45-.55.925t-1 .675M2 22V2h20v20zm2-2h2v-2h2.25q-.575-.725-.913-1.525T7 14.95q0-1.15.25-2.162t.913-1.963T10 8.938T13 7q-.275 1.1.238 2.338T15.15 11.6q.825.6 1.338 1.413T17 15q0 .875-.275 1.613T16 18h2v2h2V4H4z"></svg:path>`,
})
export class MaterialSymbolsFireplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
