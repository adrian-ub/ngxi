import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineFolderCopyIcon],svg[ic-baseline-folder-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H1v13c0 1.1.9 2 2 2h17v-2H3z"></svg:path><svg:path fill="currentColor" d="M21 4h-7l-2-2H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcBaselineFolderCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
