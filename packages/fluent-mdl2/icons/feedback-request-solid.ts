import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FeedbackRequestSolidIcon],svg[fluent-mdl2-feedback-request-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1408H704l-448 448v-448H0V128zM1024 1280H896v128h128zm8-169q0-37 7-70t36-62q39-39 77-74t68-75t49-85t19-105q0-68-26-127t-70-104t-104-71t-128-26t-127 26t-104 70t-71 104t-26 128h144q0-38 14-71t40-59t58-39t72-15q38 0 71 14t59 40t39 58t15 72q0 41-19 73t-47 61t-62 60t-61 66t-48 81t-19 107v64h144z"></svg:path>`,
})
export class FluentMdl2FeedbackRequestSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
