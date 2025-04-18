import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FileCommentIcon],svg[fluent-mdl2-file-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1371 1536l-384 384h677v-256h128v384H128V0h1115l421 421v90h-90l-294-292v293h-128V128H256v1792h704v-384H768V640h1280v896zm-54-128h603V768H896v640h192v230zm-293-512h768v128h-768zm0 256h768v128h-768z"></svg:path>`,
})
export class FluentMdl2FileCommentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
