import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCabinetIcon],svg[bx-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM5 4h14v7H5zm0 16v-7h14.001v7z"></svg:path><svg:path fill="currentColor" d="M14 7h-4V6H8v3h8V6h-2zm0 8v1h-4v-1H8v3h8v-3z"></svg:path>`,
})
export class BxCabinetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
