import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsAddToQueueIcon],svg[bx-bxs-add-to-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4 22h12v-2H4V8H2v12c0 1.103.897 2 2 2z" fill="currentColor"></svg:path><svg:path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 9h-3v3h-2v-3h-3V9h3V6h2v3h3v2z" fill="currentColor"></svg:path>`,
})
export class BxBxsAddToQueueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
