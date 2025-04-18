import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypePuppetIcon],svg[vscode-icons-file-type-puppet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffae1a" d="M25.089 11.822H18.7l-3.433-3.434V2H6.911v8.357H13.3l3.422 3.422v4.431l-3.434 3.434H6.911V30h8.357v-6.388l3.432-3.434h6.388ZM9.7 4.786h2.786v2.785H9.7ZM12.482 27.2H9.7v-2.783h2.786Z"></svg:path>`,
})
export class VscodeIconsFileTypePuppetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
