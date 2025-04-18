import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRipplesOutlineSharpIcon],svg[material-symbols-light-ripples-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V9.873q-.45.294-.953.46T17 10.5q-1.458 0-2.479-1.021T13.5 7q0-.544.166-1.047q.167-.503.461-.953H5zm-1 1V4h16v16zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsLightRipplesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
