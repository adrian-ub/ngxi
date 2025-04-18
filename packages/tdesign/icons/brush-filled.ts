import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBrushFilledIcon],svg[tdesign-brush-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.794 12.368L11.92 23.494l4.489-4.489L5.283 7.88zm17.029 5.222l3.605-3.604l-2.833-2.832l3.274-3.275l-5.46-5.46l-3.275 3.274l-2.832-2.833l-3.605 3.605z"></svg:path>`,
})
export class TdesignBrushFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
