import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLteMobiledataIcon],svg[material-symbols-light-lte-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.154 15.5v-7h1v6h3v1zm6.577 0v-6h-2v-1h5v1h-2v6zm4.769 0v-7h4v1h-3v2h3v1h-3v2h3v1z"></svg:path>`,
})
export class MaterialSymbolsLightLteMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
