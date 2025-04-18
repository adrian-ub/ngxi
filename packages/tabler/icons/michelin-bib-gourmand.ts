import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMichelinBibGourmandIcon],svg[tabler-michelin-bib-gourmand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.97 20c-2.395-1.947-4.763-5.245-1.005-8c-.52-4 3.442-7.5 5.524-7.5c.347-1 1.499-1.5 2.54-1.5s2.135.5 2.482 1.5c2.082 0 6.044 3.5 5.524 7.5c3.758 2.755 1.39 6.053-1.005 8"></svg:path><svg:path d="M8 11a1 2 0 1 0 2 0a1 2 0 1 0-2 0m6 0a1 2 0 1 0 2 0a1 2 0 1 0-2 0m-6 6.085c3.5 2.712 6.5 2.712 9-1.085"></svg:path><svg:path d="M13 18.5c.815-2.337 1.881-1.472 2-.55"></svg:path></svg:g>`,
})
export class TablerMichelinBibGourmandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
