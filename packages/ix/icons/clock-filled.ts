import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixClockFilledIcon],svg[ix-clock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.803 0 213.334 95.53 213.334 213.333S373.803 469.334 256 469.334S42.667 373.803 42.667 256S138.197 42.667 256 42.667m21.334 106.667h-42.667V286.17l70.248 70.249l30.17-30.17l-57.751-57.769z"></svg:path>`,
})
export class IxClockFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
