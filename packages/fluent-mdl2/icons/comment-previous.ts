import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CommentPreviousIcon],svg[fluent-mdl2-comment-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1024h-128V256H128v1152h256v293l293-293h222l-64 64l64 64H731l-475 475v-475H0V128zm-614 1280h614v128h-614l163 163l-90 90l-318-317l318-317l90 90z"></svg:path>`,
})
export class FluentMdl2CommentPreviousIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
