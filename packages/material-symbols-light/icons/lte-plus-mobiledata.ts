import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLtePlusMobiledataIcon],svg[material-symbols-light-lte-plus-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.75 15.5v-7h1v6h3v1zm6.192 0v-6h-2v-1h5v1h-2v6zm4.654 0v-7h4v1h-3v2h3v1h-3v2h3v1zm7.654-1v-2h-2v-1h2v-2h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightLtePlusMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
