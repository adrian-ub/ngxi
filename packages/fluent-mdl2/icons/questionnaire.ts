import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2QuestionnaireIcon],svg[fluent-mdl2-questionnaire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 549v1499H128V0h1115zm-512-37h293l-293-293zm384 128h-512V128H256v1792h1408zM384 896h384v384H384zm128 256h128v-128H512zM384 384h384v384H384zm128 256h128V512H512zm384 384h640v128H896zm-512 384h384v384H384zm128 256h128v-128H512zm384-128h640v128H896z"></svg:path>`,
})
export class FluentMdl2QuestionnaireIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
