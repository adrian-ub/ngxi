import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CommentIcon],svg[fluent-mdl2-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1408H731l-475 475v-475H0V128zm-128 128H128v1152h256v293l293-293h1243zm-640 640h-128V640h256v256q0 27-10 50t-27 40t-41 28t-50 10zm-512 0H640V640h256v256q0 27-10 50t-27 40t-41 28t-50 10z"></svg:path>`,
})
export class FluentMdl2CommentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
