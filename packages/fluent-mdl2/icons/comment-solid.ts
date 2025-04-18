import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CommentSolidIcon],svg[fluent-mdl2-comment-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h2048v1408H731l-475 475v-475H0zm896 512H640v256h128v128q27 0 50-10t40-27t28-41t10-50zm512 0h-256v256h128v128q27 0 50-10t40-27t28-41t10-50z"></svg:path>`,
})
export class FluentMdl2CommentSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
