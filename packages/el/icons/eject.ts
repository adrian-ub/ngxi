import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elEjectIcon],svg[el-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 65.002L0 711.584h1200zM0 825.623v309.375h1200V825.623z"></svg:path>`,
})
export class ElEjectIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
