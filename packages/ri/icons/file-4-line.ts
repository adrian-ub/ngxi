import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFile4LineIcon],svg[ri-file-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 16l-6.003 6H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2-1V4H5v16h9v-5z"></svg:path>`,
})
export class RiFile4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
