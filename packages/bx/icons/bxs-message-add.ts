import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsMessageAddIcon],svg[bx-bxs-message-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z" fill="currentColor"></svg:path>`,
})
export class BxBxsMessageAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
