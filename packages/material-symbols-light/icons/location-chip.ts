import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocationChipIcon],svg[material-symbols-light-location-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18q-2.507 0-4.253-1.745Q2 14.509 2 12.004t1.747-4.255T8 6h8q2.507 0 4.254 1.745T22 11.996t-1.747 4.255T16 18zm1.25-6.75q0 1.333.871 2.365q.871 1.031 1.879 1.923q1.008-.892 1.879-1.924q.871-1.031.871-2.364q0-1.142-.803-1.946T12.003 8.5t-1.947.804t-.806 1.946M12 12q-.425 0-.712-.288T11 11t.288-.712T12 10t.713.288T13 11t-.288.713T12 12"></svg:path>`,
})
export class MaterialSymbolsLightLocationChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
