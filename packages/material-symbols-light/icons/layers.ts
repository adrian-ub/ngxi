import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLayersIcon],svg[material-symbols-light-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.742l-7.385-5.73l.804-.635L12 17.462l6.58-5.085l.805.635zm0-3.819l-7.385-5.73L12 3.461l7.385 5.73z"></svg:path>`,
})
export class MaterialSymbolsLightLayersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
