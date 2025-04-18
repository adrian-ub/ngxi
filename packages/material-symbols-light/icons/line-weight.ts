import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineWeightIcon],svg[material-symbols-light-line-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 18.27v-.5h13v.5zm0-2.5v-1h13v1zm0-3v-1.462h13v1.461zm0-3.5V5.73h13v3.54z"></svg:path>`,
})
export class MaterialSymbolsLightLineWeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
