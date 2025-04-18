import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignFolderTwotoneIcon],svg[ant-design-folder-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32M840 768H184V256h188.5l119.6 114.4H840z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M372.5 256H184v512h656V370.4H492.1z"></svg:path>`,
})
export class AntDesignFolderTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
