import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineOfflineShareIcon],svg[ic-baseline-offline-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.6 10.26v1.31L17 9.33L14.6 7.1v1.28c-2.33.32-3.26 1.92-3.6 3.52c.83-1.13 1.93-1.64 3.6-1.64M16 23H6c-1.1 0-2-.9-2-2V5h2v16h10zm2-22h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 15h-8V4h8z"></svg:path>`,
})
export class IcBaselineOfflineShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
