import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightListAltCheckIcon],svg[material-symbols-light-list-alt-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.625 20q-.7 0-1.162-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v7.873l-2.746 2.746l-2.029-2.03l-4.096 4.072L12.852 20zm5.567-7.5h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zM17.254 21l-2.742-2.723l.713-.708l2.029 2.029l4.057-4.057l.708.713zm-9.137-8.23q.327 0 .548-.222q.22-.222.22-.55t-.222-.547t-.549-.22t-.548.221t-.22.55t.222.547t.549.22m0-3.769q.327 0 .548-.221q.22-.222.22-.55t-.222-.547t-.549-.22t-.548.221q-.22.222-.22.549t.222.548t.549.22"></svg:path>`,
})
export class MaterialSymbolsLightListAltCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
