import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CommentNextIcon],svg[fluent-mdl2-comment-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1027l-128-128V256H128v1152h256v293l293-293h219v128H731l-475 475v-475H0V128zm-355 1027l318 317l-318 317l-90-90l163-163h-614v-128h614l-163-163z"></svg:path>`,
})
export class FluentMdl2CommentNextIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
