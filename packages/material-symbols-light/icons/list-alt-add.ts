import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightListAltAddIcon],svg[material-symbols-light-list-alt-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.423 22.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zm-9.306-5.962q.327 0 .548-.221q.22-.221.22-.549t-.222-.548t-.549-.22t-.548.222t-.22.549t.222.547t.549.22m0-3.769q.327 0 .548-.221q.22-.222.22-.55t-.222-.547t-.549-.22t-.548.221t-.22.55t.222.547t.549.22m0-3.769q.327 0 .548-.221q.22-.222.22-.55t-.222-.547t-.549-.22t-.548.221q-.22.222-.22.549t.222.548t.549.22m3.075 3.5h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zM5.616 20q-.667 0-1.141-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h12.77q.666 0 1.14.475T20 5.615v8.326q-.475-.208-1.01-.312q-.536-.104-1.067-.104q-1.193 0-2.229.464q-1.035.463-1.778 1.28h-2.724v1h2.004q-.367.61-.57 1.293T12.423 19q0 .25.026.5t.088.5z"></svg:path>`,
})
export class MaterialSymbolsLightListAltAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
