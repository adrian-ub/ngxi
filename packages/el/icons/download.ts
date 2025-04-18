import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elDownloadIcon],svg[el-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600s600-268.631 600-600S931.369 0 600 0m0 1069.565c-259.37 0-469.565-210.261-469.565-469.565S340.63 130.435 600 130.435S1069.565 340.696 1069.565 600S859.369 1069.565 600 1069.565m117.392-720.652H482.608v266.739H335.87L600 864.13l264.13-248.478H717.391z"></svg:path>`,
})
export class ElDownloadIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
