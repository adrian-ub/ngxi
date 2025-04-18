import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPediatricsSharpIcon],svg[material-symbols-light-pediatrics-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.885 7.577v-1H11.5V3.769h1v2.808h3.616v1zm1.73 13q-.666 0-1.14-.475T8 18.963v-2.058h3.5v-1H8V13.25h3.5v-1H8V11q0-1.01.707-1.716t1.716-.707h3.154q1.01 0 1.716.707T16 11v7.962q0 .666-.475 1.14t-1.14.475z"></svg:path>`,
})
export class MaterialSymbolsLightPediatricsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
