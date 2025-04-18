import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilInputPowerIcon],svg[cil-input-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 16v104H88v191.005l104 96v89h128v-89l104-96V120h-64V16h-32v104H184V16Zm240 136v145l-104 96v71h-64v-71l-104-96V152Z"></svg:path>`,
})
export class CilInputPowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
