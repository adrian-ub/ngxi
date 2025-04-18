import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsMessageAltDotsIcon],svg[bxs-message-alt-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.5l3.5 4l3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M9 12a2 2 0 1 1 .001-4.001A2 2 0 0 1 9 12m6 0a2 2 0 1 1 .001-4.001A2 2 0 0 1 15 12"></svg:path>`,
})
export class BxsMessageAltDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
