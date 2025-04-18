import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsMinimalisticLineDuotoneIcon],svg[solar-documents-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path stroke-linecap="round" d="M9 13h6" opacity=".7"></svg:path><svg:path stroke-linecap="round" d="M9 9h6"></svg:path><svg:path stroke-linecap="round" d="M9 17h3" opacity=".4"></svg:path><svg:path stroke-linecap="round" d="M2 19V5m20 14V5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDocumentsMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
