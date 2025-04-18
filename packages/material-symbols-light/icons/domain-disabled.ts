import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDomainDisabledIcon],svg[material-symbols-light-domain-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.27 18.15l-1-1V8.154h-8.997l-.542-.542V4.154H7.235l-1-1h5.496v4h9.538zm.5 4.496l-2.504-2.492H2.73V3.608l-1.57-1.57l.708-.707l20.608 20.608zM3.73 19.154h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 8h3v-3h-3zm0-4h3v-3h-3zm4 4h6.535l-3-3h-3.534zm5.77-7h-1v-1h1z"></svg:path>`,
})
export class MaterialSymbolsLightDomainDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
