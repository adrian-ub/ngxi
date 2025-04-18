import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocationCityIcon],svg[material-symbols-light-location-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.039 20.154v-13H9.5v-3.27L12 1.5l2.5 2.385v7.269h4.462v9zm1-1h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4.461 8h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4.462 12h3v-3h-3zm0-4h3v-3h-3z"></svg:path>`,
})
export class MaterialSymbolsLightLocationCityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
