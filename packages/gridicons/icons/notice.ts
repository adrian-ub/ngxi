import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsNoticeIcon],svg[gridicons-notice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m1 15h-2v-2h2zm0-4h-2l-.5-6h3z"></svg:path>`,
})
export class GridiconsNoticeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
