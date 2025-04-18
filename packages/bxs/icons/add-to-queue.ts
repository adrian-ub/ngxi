import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsAddToQueueIcon],svg[bxs-add-to-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22h12v-2H4V8H2v12c0 1.103.897 2 2 2"></svg:path><svg:path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m-2 9h-3v3h-2v-3h-3V9h3V6h2v3h3z"></svg:path>`,
})
export class BxsAddToQueueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
