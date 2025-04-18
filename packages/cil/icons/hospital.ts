import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilHospitalIcon],svg[cil-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 304h32v32h-32zm80 0h32v32h-32zm80 0h32v32h-32z"></svg:path><svg:path fill="currentColor" d="M440 464V88h-72V16H144v72H72v376H16v32h480v-32ZM176 48h160v160H176Zm232 416H272v-64h-32v64H104V120h40v120h224V120h40Z"></svg:path><svg:path fill="currentColor" d="M272 80h-32v32h-32v32h32v32h32v-32h32v-32h-32z"></svg:path>`,
})
export class CilHospitalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
