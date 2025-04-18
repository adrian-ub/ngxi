import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsFolderIcon],svg[ls-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M380 146h305c17 0 32 15 32 32v423c0 17-15 31-32 31H32c-17 0-32-14-32-31V178c0-17 15-32 32-32h34l16-53c0-17 15-32 32-32h218c17 0 32 15 32 32z"></svg:path>`,
})
export class LsFolderIcon {
  readonly viewBox = input("0 0 717 632")
  readonly width = input("1.14em")
  readonly height = input("1em")
}
