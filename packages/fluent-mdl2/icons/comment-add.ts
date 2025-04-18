import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CommentAddIcon],svg[fluent-mdl2-comment-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1024h-128V256H128v1152h256v293l293-293h475v128H731l-475 475v-475H0V128zm-256 1280h256v128h-256v256h-128v-256h-256v-128h256v-256h128z"></svg:path>`,
})
export class FluentMdl2CommentAddIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
