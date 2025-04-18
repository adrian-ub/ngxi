import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Devices3Icon],svg[fluent-mdl2-devices-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 384h1664v1024h-768v128h256v128H768v-128h256v-128H640v256H128V896h128zm256 1152v-512H256v512zm128-256h1152V512H384v384h256z"></svg:path>`,
})
export class FluentMdl2Devices3Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
