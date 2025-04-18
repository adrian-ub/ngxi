import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPageInfoIcon],svg[material-symbols-light-page-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.558 19.058q-1.236 0-2.09-.854t-.853-2.089t.854-2.089t2.089-.853t2.089.853t.853 2.09q0 1.235-.853 2.089t-2.09.853M5 16.616v-1h7.23v1zm1.442-5.789q-1.236 0-2.089-.853T3.5 7.884q0-1.235.853-2.089t2.09-.853t2.088.854t.853 2.089t-.853 2.089t-2.089.853m5.327-2.442v-1H19v1z"></svg:path>`,
})
export class MaterialSymbolsLightPageInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
