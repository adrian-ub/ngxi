import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeVoltIcon],svg[vscode-icons-file-type-volt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="gray" d="M12.068 2h6.866l-2.73 8.421l7.322-1.331L13.115 30l3.037-14.505L8.474 17z"></svg:path>`,
})
export class VscodeIconsFileTypeVoltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
