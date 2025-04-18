import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderCollapseAllIcon],svg[ix-folder-collapse-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.757 319.999l53.952 42.667H448v42.667H259.861l-53.93-42.667h-99.264v42.667H64v-85.334zm0-106.666l53.952 42.666H448v42.667H259.861l-53.93-42.667h-99.264v42.667H64v-85.333zm0-106.667l53.952 42.667H448v42.666H259.861l-53.93-42.666h-99.264v42.666H64v-85.333z"></svg:path>`,
})
export class IxFolderCollapseAllIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
