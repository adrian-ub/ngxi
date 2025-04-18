import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCircleDotFilledIcon],svg[ix-circle-dot-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m0 106.667c-58.91 0-106.666 47.756-106.666 106.666S197.09 362.667 256 362.667S362.667 314.911 362.667 256c0-58.91-47.756-106.666-106.667-106.666"></svg:path>`,
})
export class IxCircleDotFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
