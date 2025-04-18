import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStepOutRoundedIcon],svg[material-symbols-light-step-out-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.002 21.5q-1.04 0-1.771-.728t-.731-1.77t.729-1.771t1.769-.731t1.771.729t.731 1.769t-.728 1.771t-1.77.731M11.5 5.133l-2.765 2.72q-.14.141-.332.135q-.191-.007-.341-.154q-.137-.133-.137-.34t.14-.348l3.37-3.369q.242-.243.565-.243t.566.243l3.368 3.37q.147.145.154.353t-.16.354q-.145.14-.353.133t-.354-.153L12.5 5.115V13.5q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356z"></svg:path>`,
})
export class MaterialSymbolsLightStepOutRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
