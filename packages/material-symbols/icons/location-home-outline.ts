import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocationHomeOutlineIcon],svg[material-symbols-location-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3l8 6v12H4V9zm0 12q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0-2q-.425 0-.712-.288T11 12t.288-.712T12 11t.713.288T13 12t-.288.713T12 13m0 5q-1.025 0-2 .25T8.15 19h7.7q-.875-.5-1.85-.75T12 18m-6-8v8q1.3-.975 2.825-1.487T12 16t3.175.513T18 18v-8l-6-4.5zm6 2"></svg:path>`,
})
export class MaterialSymbolsLocationHomeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
