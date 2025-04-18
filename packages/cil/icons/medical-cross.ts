import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMedicalCrossIcon],svg[cil-medical-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344 16H168v152H16v176h152v152h176V344h152V168H344Zm120 184v112H312v152H200V312H48V200h152V48h112v152Z"></svg:path>`,
})
export class CilMedicalCrossIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
