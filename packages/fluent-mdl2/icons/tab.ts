import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TabIcon],svg[fluent-mdl2-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 384v1664H512v-384H128V0h1408v384zM256 1536h1152V128H256zM1792 512h-256v1152H640v256h1152z"></svg:path>`,
})
export class FluentMdl2TabIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
