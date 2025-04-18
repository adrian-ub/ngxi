import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elResizeSmallIcon],svg[el-resize-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1024.854 0l-241.26 241.26L606.348 63.965v529.688h529.688L958.74 416.406L1200 175.146zM63.965 606.348L241.26 783.594L0 1024.854L175.146 1200l241.26-241.26l177.246 177.295V606.348z"></svg:path>`,
})
export class ElResizeSmallIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
