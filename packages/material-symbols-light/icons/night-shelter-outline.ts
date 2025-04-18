import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNightShelterOutlineIcon],svg[material-symbols-light-night-shelter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.77 17.462h.846v-1.27h6.768v1.27h.847v-3.385q0-.698-.497-1.195t-1.195-.497h-2.962v2.961H8.616V11.54h-.847zm2.329-2.539q.445 0 .75-.308t.305-.752t-.308-.75t-.753-.305t-.75.307t-.305.753t.308.75t.753.305M5 20V9.5l7-5.27l7 5.27V20zm1-1h12v-9l-6-4.5L6 10zm6-6.75"></svg:path>`,
})
export class MaterialSymbolsLightNightShelterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
