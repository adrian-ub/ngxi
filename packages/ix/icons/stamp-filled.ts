import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixStampFilledIcon],svg[ix-stamp-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 426.667h298.666v42.667H106.667ZM256 42.667c47.128 0 85.333 33.43 85.333 74.667c0 27.637-17.16 51.767-42.666 64.677L298.666 256H416l32 149.334H64L96 256h117.333v-73.989c-25.506-12.91-42.666-37.04-42.666-64.677c0-41.238 38.205-74.667 85.333-74.667"></svg:path>`,
})
export class IxStampFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
