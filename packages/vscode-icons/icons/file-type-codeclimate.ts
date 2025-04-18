import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeCodeclimateIcon],svg[vscode-icons-file-type-codeclimate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0b2734" d="M2 2h28v28H2z"></svg:path><svg:path fill="#fff" d="M20.745 8.2L15.4 13.517l3.173 3.173l2.174-2.174l6.111 6.14L30 17.484Zm-6.317 6.287l-3.144-3.143l-8.05 8.05L2 20.627L5.173 23.8l1.234-1.263l4.084-4.055l.793-.793l3.144 3.144L17.4 23.8l3.173-3.173L17.6 17.66z"></svg:path>`,
})
export class VscodeIconsFileTypeCodeclimateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
