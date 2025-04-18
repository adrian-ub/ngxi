import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEdaOutlineSharpIcon],svg[material-symbols-light-eda-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.673 11.77v-9h1v9zm3.654 0v-10h1v10zM15 16.112V3.77h1v11.766zM5 21.27h8.806l6.158-6.215l-.5-.385l-8.08 4.771l-3.134-4.17H5zm-1 1v-8h4.75l2.866 3.829L16 15.535l3.842-2.239l1.914 1.412l-7.562 7.561zm1-8H4v-9.5h1zm0-2.5h10zm0 9.5h8.806z"></svg:path>`,
})
export class MaterialSymbolsLightEdaOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
