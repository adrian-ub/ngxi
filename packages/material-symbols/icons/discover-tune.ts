import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDiscoverTuneIcon],svg[material-symbols-discover-tune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9V7h3V3h2v4h3v2zm3 12V11h2v10zM6 21v-4H3v-2h8v2H8v4zm0-8V3h2v10z"></svg:path>`,
})
export class MaterialSymbolsDiscoverTuneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
