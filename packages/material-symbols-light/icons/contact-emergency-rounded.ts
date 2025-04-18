import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightContactEmergencyRoundedIcon],svg[material-symbols-light-contact-emergency-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19.616V4.385h22v15.23zm7.998-5.385q1.04 0 1.771-.729t.731-1.769t-.728-1.771t-1.77-.731t-1.771.728t-.731 1.77t.729 1.771t1.769.73m-5.782 4.386h11.569q-1.05-1.356-2.554-2.178T9 15.616t-3.23.822t-2.554 2.178m14.342-8.854v1.488q0 .192.125.317t.316.125t.317-.125t.126-.317V9.761l1.287.745q.16.092.338.048t.267-.206t.045-.339t-.208-.265L18.884 9l1.287-.744q.163-.089.208-.266t-.045-.338t-.267-.206q-.179-.044-.338.048l-1.287.744V6.75q0-.192-.125-.317t-.316-.125t-.317.125t-.126.317v1.489l-1.287-.745q-.16-.092-.338-.048t-.267.206q-.089.161-.045.338q.045.177.208.266L17.116 9l-1.287.744q-.163.089-.207.266q-.045.177.044.338q.09.162.267.206q.179.044.338-.048z"></svg:path>`,
})
export class MaterialSymbolsLightContactEmergencyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
