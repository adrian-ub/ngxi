import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsNoticeOutlineIcon],svg[gridicons-notice-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m1 13h-2v2h2zm-2-2h2l.5-6h-3z"></svg:path>`,
})
export class GridiconsNoticeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
