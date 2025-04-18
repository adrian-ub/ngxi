import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalBarIcon],svg[material-symbols-light-local-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20.5v-1h4.5v-6.462L4.346 5V4h15.308v1L12.5 13.038V19.5H17v1zM7.45 7h9.1l1.8-2H5.65z"></svg:path>`,
})
export class MaterialSymbolsLightLocalBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
