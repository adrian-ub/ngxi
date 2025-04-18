import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHovOutlineIcon],svg[material-symbols-light-hov-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21l-5-9.02L12 3l5 8.98zm0-2.034l3.848-6.985L12 5.035L8.152 11.98zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightHovOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
