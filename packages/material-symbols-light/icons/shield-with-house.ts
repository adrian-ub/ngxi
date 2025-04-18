import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShieldWithHouseIcon],svg[material-symbols-light-shield-with-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8.896l6.539 5.087q-.553 2.07-1.838 3.745q-1.285 1.674-3.201 2.618v-4.84h-3v4.84q-1.916-.944-3.201-2.618t-1.838-3.745zm0-5.813l7 2.615V11.1q0 .442-.05.93t-.106.93L12 7.64l-6.844 5.32q-.062-.443-.109-.93T5 11.1V5.698z"></svg:path>`,
})
export class MaterialSymbolsLightShieldWithHouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
