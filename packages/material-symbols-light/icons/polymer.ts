import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPolymerIcon],svg[material-symbols-light-polymer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.027 18.77L2.269 12l3.808-6.77h3.385L5.654 12l2.215 3.92l6.57-10.69h3.484L21.731 12l-3.808 6.77h-3.384L18.345 12L16.13 8.092L9.573 18.77z"></svg:path>`,
})
export class MaterialSymbolsLightPolymerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
