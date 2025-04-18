import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAlignHorizCenterDetailedFillIcon],svg[si-align-horiz-center-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1a1 1 0 0 1 1 1v3h6.4A1.6 1.6 0 0 1 21 6.6v1.8a1.6 1.6 0 0 1-1.6 1.6H13v4h2.4a1.6 1.6 0 0 1 1.6 1.6v1.8a1.6 1.6 0 0 1-1.6 1.6H13v3a1 1 0 1 1-2 0v-3H8.6A1.6 1.6 0 0 1 7 17.4v-1.8A1.6 1.6 0 0 1 8.6 14H11v-4H4.6A1.6 1.6 0 0 1 3 8.4V6.6A1.6 1.6 0 0 1 4.6 5H11V2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignHorizCenterDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
