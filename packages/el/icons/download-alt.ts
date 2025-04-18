import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elDownloadAltIcon],svg[el-download-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1037.516h1200V1200H0zM820.785 0h-441.57v496.632H103.233L600 959.265l496.768-462.633H820.785z"></svg:path>`,
})
export class ElDownloadAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
