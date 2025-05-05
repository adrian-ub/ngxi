import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderTagIcon],svg[ix-folder-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M245.333 106.667L192 64H42.667v320H256v-42.667H85.333V106.667h88.994l55.006 42.666H384V257.83l42.667 42.667v-193.83zm245.334 288L373.333 277.333h-96v96l117.334 117.334zM320 320h21.333v21.333H320z" clip-rule="evenodd"></svg:path>`,
})
export class IxFolderTagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
