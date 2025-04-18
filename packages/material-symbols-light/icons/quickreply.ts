import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightQuickreplyIcon],svg[material-symbols-light-quickreply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.923 20.77V17h-1.23v-4.615h2.788l-1.123 3.23h1.757zM3 20.076V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v5h-6.077V17H6.077z"></svg:path>`,
})
export class MaterialSymbolsLightQuickreplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
