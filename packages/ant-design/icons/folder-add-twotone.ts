import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignFolderAddTwotoneIcon],svg[ant-design-folder-add-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M372.5 256H184v512h656V370.4H492.1zM540 443.1V528h84.5c4.1 0 7.5 3.1 7.5 7v42c0 3.8-3.4 7-7.5 7H540v84.9c0 3.9-3.1 7.1-7 7.1h-42c-3.8 0-7-3.2-7-7.1V584h-84.5c-4.1 0-7.5-3.2-7.5-7v-42c0-3.9 3.4-7 7.5-7H484v-84.9c0-3.9 3.2-7.1 7-7.1h42c3.9 0 7 3.2 7 7.1"></svg:path><svg:path fill="currentColor" d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32M840 768H184V256h188.5l119.6 114.4H840z"></svg:path><svg:path fill="currentColor" d="M484 443.1V528h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H484v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V584h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H540v-84.9c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1"></svg:path>`,
})
export class AntDesignFolderAddTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
