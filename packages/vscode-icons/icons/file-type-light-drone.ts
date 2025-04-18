import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLightDroneIcon],svg[vscode-icons-file-type-light-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#37474f" d="M19.581 17.9A3.581 3.581 0 1 1 16 14.323a3.58 3.58 0 0 1 3.581 3.577"></svg:path><svg:path fill="#37474f" d="M16 4.165c6.252.049 13.36 4.456 14 12.763h-8.465S20.444 12.339 16 12.37s-5.535 4.558-5.535 4.558H2C2.411 8.769 9.4 4.114 16 4.165m.058 23.67c-4.662.012-9.017-3.505-10.8-8.953h5.209s1.124 4.537 5.568 4.506s5.5-4.506 5.5-4.506h5.209a10.96 10.96 0 0 1-10.686 8.953"></svg:path>`,
})
export class VscodeIconsFileTypeLightDroneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
