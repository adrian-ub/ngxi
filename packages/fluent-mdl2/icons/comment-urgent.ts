import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CommentUrgentIcon],svg[fluent-mdl2-comment-urgent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1408H731l-475 475v-475H0V128zm-128 128H128v1152h256v293l293-293h1243zm-896 640H896V384h128zm0 256H896v-128h128z"></svg:path>`,
})
export class FluentMdl2CommentUrgentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
