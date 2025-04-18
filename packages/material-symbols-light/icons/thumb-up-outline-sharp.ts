import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightThumbUpOutlineSharpIcon],svg[material-symbols-light-thumb-up-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.423 20V9l6.27-6.192l.869.869L13.435 9H22v3.17L18.696 20zm1-1h9.596L21 11.98V10h-8.808l1.158-5.461l-4.927 4.888zm0-9.573V19zM3 20V9h4.423v1H4v9h3.423v1z"></svg:path>`,
})
export class MaterialSymbolsLightThumbUpOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
