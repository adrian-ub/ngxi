import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHardwareRoundedIcon],svg[material-symbols-light-hardware-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.039 20q-.31 0-.54-.23t-.23-.54v-6.71h4v6.71q0 .31-.23.54T13.5 20zm-.77-8.5V7H6.931q-.379 0-.592-.312t-.056-.67q.479-.931 1.389-1.475Q8.582 4 9.654 4H13.5q.31 0 .54.23t.23.54v2.115l2.588-2.589q.142-.142.304-.219Q17.325 4 17.51 4h.086q.233 0 .395.143t.163.357v5.77q0 .213-.163.356t-.395.143h-.087q-.184 0-.347-.077t-.304-.219l-2.589-2.589V11.5z"></svg:path>`,
})
export class MaterialSymbolsLightHardwareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
