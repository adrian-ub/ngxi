import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFileCabinetIcon],svg[icon-park-outline-file-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M42 4H6v10h36zm0 15H6v10h36zm0 15H6v10h36z"></svg:path><svg:path stroke-linecap="round" d="M21 9h6m-6 15h6m-6 15h6"></svg:path></svg:g>`,
})
export class IconParkOutlineFileCabinetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
