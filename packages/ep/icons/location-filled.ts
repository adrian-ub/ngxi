import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epLocationFilledIcon],svg[ep-location-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928m0-435.2a64 64 0 1 0 0-128a64 64 0 0 0 0 128m0 140.8a204.8 204.8 0 1 1 0-409.6a204.8 204.8 0 0 1 0 409.6"></svg:path>`,
})
export class EpLocationFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
