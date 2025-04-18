import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMuseumOutlineIcon],svg[material-symbols-light-museum-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-1h2V10H3v-.461l9-6.308l9 6.307V10h-2v10h2v1zm3-1h12zm2.616-2.5h1V13L12 16.538L14.385 13v4.5h1v-6h-1.116L12 14.885L9.73 11.5H8.617zM18 20V8.65l-6-4.2l-6 4.2V20z"></svg:path>`,
})
export class MaterialSymbolsLightMuseumOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
