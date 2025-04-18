import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBrushIcon],svg[tdesign-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.92 23.494L.794 12.368L10.3 2.86l2.833 2.833l3.274-3.275L21.87 7.88l-3.274 3.275l2.832 2.832zm3.074-5.903L6.697 9.293l-3.075 3.075l8.298 8.297zM8.111 7.879l8.297 8.298l2.191-2.19l-2.833-2.833l3.275-3.275l-2.633-2.632l-3.274 3.274l-2.833-2.832z"></svg:path>`,
})
export class TdesignBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
