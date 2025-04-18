import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightToolsPowerDrillSharpIcon],svg[material-symbols-light-tools-power-drill-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 9.5h5.385v-.885H6.5zm0-2.116h5.385V6.5H6.5zm9.27 2.808V5.808h1.422l.808.808V7.5h2.192v1H18v.885l-.808.807zm-8.578 3.385v-1.77h-.807q-1.238 0-2.12-.88t-.88-2.12V7.193q0-1.237.88-2.118t2.12-.882H15v7.616h-3.808v1.769zm-1.615 4.23v-3.46h7.23v3.46z"></svg:path>`,
})
export class MaterialSymbolsLightToolsPowerDrillSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
