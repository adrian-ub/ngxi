import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DataflowsIcon],svg[fluent-mdl2-dataflows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 0h640v640h-256v512H512v256h256v640H128v-640h256V640H128V0h640v640H512v384h1024V640h-256zM256 512h384V128H256zm384 1408v-384H256v384zM1792 512V128h-384v384z"></svg:path>`,
})
export class FluentMdl2DataflowsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
