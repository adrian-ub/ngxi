import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVirtualStorageIcon],svg[grommet-icons-virtual-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 22c4.97 0 9-2.239 9-5s-4.03-5-9-5s-9 2.239-9 5s4.03 5 9 5Zm0-4.5c4.97 0 9-2.239 9-5s-4.03-5-9-5s-9 2.239-9 5s4.03 5 9 5Zm0-5.5c4.97 0 9-2.239 9-5s-4.03-5-9-5s-9 2.239-9 5s4.03 5 9 5Z"></svg:path>`,
})
export class GrommetIconsVirtualStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
