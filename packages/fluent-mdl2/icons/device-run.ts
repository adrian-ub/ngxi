import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DeviceRunIcon],svg[fluent-mdl2-device-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 384v896h1024v128h-128v128h128v128H640v-128h256v-128H0V256h1920v1093l-128-76V384zm1152 768l747 448l-747 448zm128 226v444l370-222z"></svg:path>`,
})
export class FluentMdl2DeviceRunIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
