import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderApplicationScreenIcon],svg[ix-folder-application-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M245.333 106.667L192 64H42.667v320h128v-42.667H85.333V106.667h88.994l55.006 42.666H384v64h42.667V106.667zm224 128H192V448h277.333zM426.667 320h-192v85.333h192zm-192-42.667h192v21.334h-192z" clip-rule="evenodd"></svg:path>`,
})
export class IxFolderApplicationScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
