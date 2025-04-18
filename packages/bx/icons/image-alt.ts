import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxImageAltIcon],svg[bx-image-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M5 19V5h14l.002 14z"></svg:path><svg:path fill="currentColor" d="m10 14l-1-1l-3 4h12l-5-7z"></svg:path>`,
})
export class BxImageAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
