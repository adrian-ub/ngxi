import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCopyIcon],svg[ix-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 128v320h-256V128zM384 170.667H213.333v234.667H384zm-64-128v42.667H128v256H85.333V42.667z"></svg:path>`,
})
export class IxCopyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
