import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineOfflineShareIcon],svg[ic-outline-offline-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5H4v16c0 1.1.9 2 2 2h10v-2H6z"></svg:path><svg:path fill="currentColor" d="M18 1h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 16h-8v-1h8zm0-3h-8V6h8zm0-10h-8V3h8z"></svg:path><svg:path fill="currentColor" d="M12.5 10.25h1.63l-.69.69L14.5 12L17 9.5L14.5 7l-1.06 1.06l.69.69H12c-.55 0-1 .45-1 1V12h1.5z"></svg:path>`,
})
export class IcOutlineOfflineShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
