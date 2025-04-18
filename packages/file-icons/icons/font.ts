import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsFontIcon],svg[file-icons-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 256h192v64h-64v192H96V320H32zm448-128H354.125v384h-68.25V128H160V64h320z"></svg:path>`,
})
export class FileIconsFontIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
