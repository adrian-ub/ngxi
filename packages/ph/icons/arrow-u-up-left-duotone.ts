import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpLeftDuotoneIcon],svg[ph-arrow-u-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 40v96L32 88Z" opacity=".2"></svg:path><svg:path d="M168 80H88V40a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 88 136V96h80a48 48 0 0 1 0 96H80a8 8 0 0 0 0 16h88a64 64 0 0 0 0-128m-96 36.69L43.31 88L72 59.31Z"></svg:path></svg:g>`,
})
export class PhArrowUUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
