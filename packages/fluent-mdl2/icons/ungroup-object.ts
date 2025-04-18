import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2UngroupObjectIcon],svg[fluent-mdl2-ungroup-object-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 896v896h128v256h-256v-128H896v128H640v-256h128v-512H256v128H0v-256h128V256H0V0h256v128h896V0h256v256h-128v512h512V640h256v256zM768 1152V896H640V640h256v128h256V256H256v896zm128-256v256h256V896zm896 0h-512v256h128v256h-256v-128H896v512h896z"></svg:path>`,
})
export class FluentMdl2UngroupObjectIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
