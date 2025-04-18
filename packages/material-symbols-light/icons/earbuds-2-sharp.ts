import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEarbuds2SharpIcon],svg[material-symbols-light-earbuds-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.327 22v-9.538H22v4.788h-1.904V22zm-3.558-3.808q-1.437 0-2.451-.962t-1.014-2.384q0-1.401 1.014-2.373t2.451-.973h1.442v6.692zM3.904 12.54V7.79H2V3h5.673v9.539zm5.885-3.81V2.039h1.442q1.415 0 2.44.974t1.025 2.378q0 1.425-1.025 2.382t-2.44.958z"></svg:path>`,
})
export class MaterialSymbolsLightEarbuds2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
