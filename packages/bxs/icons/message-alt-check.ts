import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsMessageAltCheckIcon],svg[bxs-message-alt-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v12c0 1.103.897 2 2 2h3.5l3.5 4l3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2m5.707 4.293L11 10.586l4.793-4.793l1.414 1.414L11 13.414L7.293 9.707z"></svg:path>`,
})
export class BxsMessageAltCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
