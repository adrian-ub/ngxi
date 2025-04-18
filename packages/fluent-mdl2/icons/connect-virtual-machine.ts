import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ConnectVirtualMachineIcon],svg[fluent-mdl2-connect-virtual-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1280h-768v128h128v128h256v128h384v128h-384v128H512v-128H128v-128h384v-128h256v-128h128v-128H128V128h1664zm-512 384h-256v-128H896v128H640v128h640zM256 1152h1408V256H256z"></svg:path>`,
})
export class FluentMdl2ConnectVirtualMachineIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
