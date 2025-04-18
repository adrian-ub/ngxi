import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elTrashIcon],svg[el-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M451.376 0v91.743H104.587V260.55h990.826V91.743H748.624V0zM157.798 388.991V1200h884.404V388.991z"></svg:path>`,
})
export class ElTrashIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
