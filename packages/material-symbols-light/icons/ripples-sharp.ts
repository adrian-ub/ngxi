import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRipplesSharpIcon],svg[material-symbols-light-ripples-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.127 5q-.294.45-.46.953T13.5 7q0 1.458 1.021 2.479T17 10.5q.544 0 1.047-.166q.503-.167.953-.461V5zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightRipplesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
