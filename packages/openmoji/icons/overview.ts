import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiOverviewIcon],svg[openmoji-overview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M24 18h36v7H24zm0 15h36v7H24zm0 15h36v7H24z"></svg:path><svg:path fill="#9B9B9A" d="M12 48h7v7h-7zm0-15h7v7h-7zm0-15h7v7h-7z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M59 25H25a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1m0 15H25a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1m0 15H25a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1M18 25h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1m0 15h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1m0 15h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"></svg:path>`,
})
export class OpenmojiOverviewIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
