import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightIdentityPlatformIcon],svg[material-symbols-light-identity-platform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20.175l5.12-3.136q-1.154-.741-2.455-1.14T12 15.5t-2.668.409q-1.303.408-2.482 1.124zm0-7.675q1.258 0 2.129-.871T15 9.5t-.871-2.129T12 6.5t-2.129.871T9 9.5t.871 2.129T12 12.5m0 8.827l-8-4.885V7.558l8-4.885l8 4.885v8.884z"></svg:path>`,
})
export class MaterialSymbolsLightIdentityPlatformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
