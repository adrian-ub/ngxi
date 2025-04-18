import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PlugIcon],svg[fluent-mdl2-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 384v448q0 83-29 158t-80 135t-122 98t-153 52v773H896v-773q-83-12-153-51t-121-99t-81-134t-29-159V384h128V0h128v384h384V0h128v384zm-128 128H640v320q0 66 25 124t68 102t102 69t125 25t124-25t101-68t69-102t26-125z"></svg:path>`,
})
export class FluentMdl2PlugIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
