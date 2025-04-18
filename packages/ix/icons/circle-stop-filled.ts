import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCircleStopFilledIcon],svg[ix-circle-stop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 469.334c117.821 0 213.334-95.513 213.334-213.334c0-117.82-95.513-213.333-213.334-213.333C138.18 42.667 42.667 138.18 42.667 256c0 117.821 95.513 213.334 213.333 213.334m-85.333-298.667h170.667v170.667H170.667z"></svg:path>`,
})
export class IxCircleStopFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
