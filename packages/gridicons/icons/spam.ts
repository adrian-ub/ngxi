import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsSpamIcon],svg[gridicons-spam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7L2 7v10l5 5h10l5-5V7zm-4 15h-2v-2h2zm0-4h-2l-.5-6h3z"></svg:path>`,
})
export class GridiconsSpamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
