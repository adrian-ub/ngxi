import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BulletedTreeListIcon],svg[fluent-mdl2-bulleted-tree-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 384h1536v128H512zm512 640V896h1024v128zm0 512v-128h1024v128zM0 640V256h384v384zm128-256v128h128V384zm384 768V768h384v384zm128-256v128h128V896zm-128 768v-384h384v384zm128-256v128h128v-128z"></svg:path>`,
})
export class FluentMdl2BulletedTreeListIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
