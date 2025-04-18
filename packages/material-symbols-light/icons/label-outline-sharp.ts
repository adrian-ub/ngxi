import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabelOutlineSharpIcon],svg[material-symbols-light-label-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h12.635L21 12l-5.365 7zm1-1h11.135l4.615-6l-4.615-6H4zm7.885-6"></svg:path>`,
})
export class MaterialSymbolsLightLabelOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
