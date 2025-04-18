import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsMessageDetailIcon],svg[bxs-message-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A2 2 0 0 0 20 2m-6 11H7v-2h7zm3-4H7V7h10z"></svg:path>`,
})
export class BxsMessageDetailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
