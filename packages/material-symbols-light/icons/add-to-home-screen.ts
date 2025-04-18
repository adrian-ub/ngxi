import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddToHomeScreenIcon],svg[material-symbols-light-add-to-home-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.616 22q-.667 0-1.141-.475T7 20.386v-3.308h1V18.5h10v-13H8v1.423H7V3.625q0-.68.475-1.153Q7.949 2 8.615 2h8.77q.666 0 1.14.475T19 3.614v16.77q0 .666-.475 1.14t-1.14.475zM4.4 16.308l-.708-.708l6.1-6.1H5.5v-1h6v6h-1v-4.292z"></svg:path>`,
})
export class MaterialSymbolsLightAddToHomeScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
