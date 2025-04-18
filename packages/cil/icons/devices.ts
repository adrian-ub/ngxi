import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilDevicesIcon],svg[cil-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 232h-48V120a24.03 24.03 0 0 0-24-24H40a24.03 24.03 0 0 0-24 24v246a24.03 24.03 0 0 0 24 24h172v50h-60v32h152v-32h-60v-50h92v58a24.027 24.027 0 0 0 24 24h112a24.027 24.027 0 0 0 24-24V256a24.027 24.027 0 0 0-24-24m-136 24v102H48V128h344v104h-32a24.027 24.027 0 0 0-24 24m128 184h-96V264h96Z"></svg:path>`,
})
export class CilDevicesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
