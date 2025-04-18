import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOutpatientIcon],svg[material-symbols-light-outpatient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h12.077v16H9.923v-4.154h-3.77V20zm3.385-7.308h1.461v-1.461H5.385zm0-3.846h1.461V7.384H5.385zm3.846 3.846h1.461v-1.461H9.231zm0-3.846h1.461V7.384H9.231zm10 5.943l-.708-.689l1.594-1.6h-3.886v-1h3.886l-1.594-1.6l.708-.688L22.019 12z"></svg:path>`,
})
export class MaterialSymbolsLightOutpatientIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
