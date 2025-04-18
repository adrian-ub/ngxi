import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEggSharpIcon],svg[material-symbols-egg-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18h1v-2h-1q-1.25 0-2.125-.875T10 13v-1H8v1q0 2.075 1.463 3.538T13 18m-1 3q-2.925 0-4.962-2.037T5 14q0-1.925.638-3.875t1.65-3.537T9.55 4T12 3q1.225 0 2.463 1t2.25 2.588t1.65 3.537T19 14q0 2.925-2.037 4.963T12 21"></svg:path>`,
})
export class MaterialSymbolsEggSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
