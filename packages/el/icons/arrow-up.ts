import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elArrowUpIcon],svg[el-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M599.992 0L131.243 703.131h252.546V1200h432.422V703.131h252.546z"></svg:path>`,
})
export class ElArrowUpIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
