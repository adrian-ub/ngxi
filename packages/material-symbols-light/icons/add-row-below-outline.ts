import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddRowBelowOutlineIcon],svg[material-symbols-light-add-row-below-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10.558h14V4H5zM4 19V3h16v16h-3.116v-1H19v-6.442H5V18h2.116v1zm8-8.442v1zM11.5 21v-2h-2v-1h2v-2h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightAddRowBelowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
