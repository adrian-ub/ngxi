import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AssessmentGroupIcon],svg[fluent-mdl2-assessment-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1536H384v-256h256zm512 0H896v-256h256zm512-1024h-256V256h256zm0 1024h-256v-256h256zm-512-512H896V768h256zm512 0h-256V768h256zm256-768v1536H128V256h128v1408h1536V256z"></svg:path>`,
})
export class FluentMdl2AssessmentGroupIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
