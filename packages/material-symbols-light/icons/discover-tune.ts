import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDiscoverTuneIcon],svg[material-symbols-light-discover-tune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 8.5v-1h3v-4h1v4h3v1zm3 12v-9h1v9zm-10 0v-4h-3v-1h7v1h-3v4zm0-8v-9h1v9z"></svg:path>`,
})
export class MaterialSymbolsLightDiscoverTuneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
