import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FeedbackRequestMirroredSolidIcon],svg[fluent-mdl2-feedback-request-mirrored-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1408H704l-448 448v-448H0V128zM1024 1280H896v128h128zm264-640q0-68-26-127t-70-104t-104-71t-128-26t-127 26t-104 70t-71 104t-26 128q0 61 19 106t47 82t62 66t61 59t48 62t19 73v64h144v-64q0-61-19-106t-47-82t-62-66t-61-59t-48-62t-19-73q0-38 14-71t40-59t58-39t72-15q38 0 71 14t59 40t39 58t15 72z"></svg:path>`,
})
export class FluentMdl2FeedbackRequestMirroredSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
