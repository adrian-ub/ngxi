import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StepInsertIcon],svg[fluent-mdl2-step-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 256v1408H128v-640h512V640h512V256zm-128 128h-512v384H768v384H256v384h1536zm-1274 0H0V256h518L355 93l90-90l317 317l-317 317l-90-90z"></svg:path>`,
})
export class FluentMdl2StepInsertIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
