import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSurveillanceIcon],svg[ix-surveillance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m108.172 105.788l360.84 98.445l-34.323 34.363l23.8 6.407l-22.085 82.425l-71.345-19.117l-35.262 35.307l-88.147-24.203l-49.598 85.908l-.052-.025v.035l-85.333-.013V448H64V320h42.667v42.653h60.736l31.715-54.916L64 270.639zm30.115 52.439l-22.103 82.488l200.952 55.17l69.757-69.851z"></svg:path>`,
})
export class IxSurveillanceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
