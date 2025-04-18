import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DragObjectIcon],svg[fluent-mdl2-drag-object-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1043 1395l90 90l-173 174l-173-174l90-90l83 83zM877 526l-90-91l173-173l173 173l-90 91l-83-83zM269 877l-82 83l82 83l-90 90L6 960l173-173zm1645 83l-173 173l-90-90l83-83l-83-83l90-90zM384 640h1152v128H384zm0 256h1152v128H384zm0 256h1152v128H384z"></svg:path>`,
})
export class FluentMdl2DragObjectIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
