import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlagVariantOffIcon],svg[mdi-flag-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 22.7L10.2 12.1C7.8 12.4 7 14 7 14v7H5V6.9L1.1 3l1.3-1.3l19.7 19.7zM20 12V4s-1 2-4 2c-2 0-2-2-5-2c-1.2 0-2.3.3-3.2.6l9.3 9.3C19.2 13.5 20 12 20 12"></svg:path>`,
})
export class MdiFlagVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
