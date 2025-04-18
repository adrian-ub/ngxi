import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEdaSharpIcon],svg[material-symbols-eda-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 23v-7h5.45l3.4 4.525l6.175-6.175l2.35-1.425l2.65 1.975l-8.1 8.1zm4-11V2h2v10h2V1h2v11h2V3h2v9.575l-4.95 4.9L9.45 14H3V4h2v8z"></svg:path>`,
})
export class MaterialSymbolsEdaSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
