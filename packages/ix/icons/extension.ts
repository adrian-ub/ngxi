import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixExtensionIcon],svg[ix-extension-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 64H448v149.333H298.667zm42.666 42.667h64v64h-64zm-234.666 42.666h106.666V256H106.667zm256 106.667H256V106.666H64V448h341.333V256zm-149.334 42.666v106.667H106.667V298.666zm149.334 106.667H256V298.666h106.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxExtensionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
