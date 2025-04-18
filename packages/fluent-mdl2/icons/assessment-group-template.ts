import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AssessmentGroupTemplateIcon],svg[fluent-mdl2-assessment-group-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1792h512v128H128V0h1792v1024h-128V512H256zm0-1408h1536V128H256zm1792 768v896H896v-896h128v768h896v-768zm-384 512h128v128h-128zm128-128h-128v-128h128zm0-256h-128v-128h128zm-384 384h128v128h-128zm128-128h-128v-128h128zm-384 256v-128h128v128z"></svg:path>`,
})
export class FluentMdl2AssessmentGroupTemplateIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
