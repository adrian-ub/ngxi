import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixElementIcon],svg[ix-element-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 85.335h106.667V192H320zm-42.667-42.667h192v192h-192zM106.667 149.335h106.666v106.666H106.667zm256 106.666H256V106.668H64v341.333h341.333v-192zm-149.334 42.667v106.667H106.667V298.668zm149.334 106.667H256V298.668h106.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxElementIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
