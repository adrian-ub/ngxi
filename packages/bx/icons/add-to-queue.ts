import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxAddToQueueIcon],svg[bx-add-to-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M8 16V4h12l.002 12z"></svg:path><svg:path fill="currentColor" d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4zm11-2h-2v3h-3v2h3v3h2v-3h3V9h-3z"></svg:path>`,
})
export class BxAddToQueueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
