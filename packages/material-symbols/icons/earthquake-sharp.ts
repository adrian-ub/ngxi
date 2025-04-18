import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarthquakeSharpIcon],svg[material-symbols-earthquake-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.275 22L5.5 13H2v-2h4.975l1.875 6.075L12.2 2h1.6l2.35 10.175L17.775 7H19.2l1.5 4H22v2h-2.7l-.725-1.925L16.725 17H15.2L13 7.525L9.8 22z"></svg:path>`,
})
export class MaterialSymbolsEarthquakeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
