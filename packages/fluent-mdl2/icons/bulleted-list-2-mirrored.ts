import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BulletedList2MirroredIcon],svg[fluent-mdl2-bulleted-list-2-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v128h1536V384zm1536 512H0v128h1536zm0 512H0v128h1536zm512-1152h-384v384h384zm-128 256h-128V384h128zm128 256h-384v384h384zm-128 256h-128V896h128zm128 256h-384v384h384zm-128 256h-128v-128h128z"></svg:path>`,
})
export class FluentMdl2BulletedList2MirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
