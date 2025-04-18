import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsContactPlusIcon],svg[pixelarticons-contact-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h22v11h-2V5H2v14h12v2H0V3zm8 4H6v4h4zm-6 6h8v4H4zm16-6h-6v2h6zm-6 4h6v2h-6zm3 4h-3v2h3zm4 6v3h-2v-3h-3v-2h3v-3h2v3h3v2z"></svg:path>`,
})
export class PixelarticonsContactPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
