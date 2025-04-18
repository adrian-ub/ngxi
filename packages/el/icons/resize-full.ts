import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elResizeFullIcon],svg[el-resize-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m670.312 0l177.246 177.295l-241.21 241.211l175.146 175.146l241.211-241.211L1200 529.688V0zM418.506 606.348L177.295 847.559L0 670.312V1200h529.688l-177.246-177.295l241.211-241.211z"></svg:path>`,
})
export class ElResizeFullIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
