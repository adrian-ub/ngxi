import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReportAddIcon],svg[fluent-mdl2-report-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1280h-384V384h384zM0 1024h384v640H0zm1408 512h-128v128h-256V0h384zM512 384h384v1280H512zm1536 1280v128h-256v256h-128v-256h-256v-128h256v-256h128v256z"></svg:path>`,
})
export class FluentMdl2ReportAddIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
