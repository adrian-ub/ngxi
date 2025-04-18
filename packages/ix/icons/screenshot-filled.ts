import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixScreenshotFilledIcon],svg[ix-screenshot-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.334 42.667v64h256v256h64v42.667h-64v64h-42.667v-64h-256V149.333h-64v-42.666h64v-64zM208 213.96l-58.666 62.69v62.44l59.669-63.783l69.323 69.32l38.773-38.792l45.568 45.556v-60.34L317.114 245.5l-38.799 38.79zM288 160c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"></svg:path>`,
})
export class IxScreenshotFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
