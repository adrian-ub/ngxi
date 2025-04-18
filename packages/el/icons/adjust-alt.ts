import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elAdjustAltIcon],svg[el-adjust-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104.312 0v699.844H0v254.062h367.281V699.844H262.969V0zM520.75 0v451.75H416.344v254.062h367.312V451.75H679.312V0zm416.281 0v201.625H832.719v254.062H1200V201.625h-104.312V0zm-51.093 252.031h260.844v50.438H885.938zm51.093 246.094V1200h158.656V498.125zm-467.437 4.031h260.812v50.438H469.594zm51.156 244.032V1200h158.562V746.188zm-467.531 4.031h260.844v50.438H53.219zm51.125 246.093V1200H263V996.312z"></svg:path>`,
})
export class ElAdjustAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
