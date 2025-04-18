import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFolderOffIcon],svg[ic-sharp-folder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l-2-2H6.83L22 19.17V6zM2.1 2.1L.69 3.51L2 4.83V20h15.17l3.32 3.31l1.41-1.41z"></svg:path>`,
})
export class IcSharpFolderOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
