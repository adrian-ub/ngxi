import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxImageIcon],svg[bx-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7.499" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m10.499 14l-1.5-2l-3 4h12l-4.5-6z"></svg:path><svg:path fill="currentColor" d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m-16 14V6h16l.002 12z"></svg:path>`,
})
export class BxImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
