import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTreeTwoLevelIcon],svg[ix-tree-two-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333H256v64H42.667zm213.333 128h192v64H256zm-106.667 21.334v-64h-42.666v106.666h106.666v-42.666zM448 341.333H256v64h192zm-298.667-42.666v64h64v42.666H106.667V298.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTreeTwoLevelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
