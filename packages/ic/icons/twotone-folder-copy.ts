import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFolderCopyIcon],svg[ic-twotone-folder-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.17 4H7v11h14V6h-7.83z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M21 4h-7l-2-2H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 11H7V4h4.17l2 2H21z"></svg:path><svg:path fill="currentColor" d="M3 6H1v13c0 1.1.9 2 2 2h17v-2H3z"></svg:path>`,
})
export class IcTwotoneFolderCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
