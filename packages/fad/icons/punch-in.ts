import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadPunchInIcon],svg[fad-punch-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.28 67.494a4 4 0 0 1 4.005-3.994H83.78c8.837 0 19.659 6.169 24.165 13.767l50.391 84.966c4.51 7.604 15.33 13.767 24.157 13.767H227.7a4 4 0 0 1 4.005 4.007v8.986a4.004 4.004 0 0 1-3.998 4.007h-58.708c-8.835 0-19.602-6.196-24.04-13.828L95.32 93.828C90.88 86.19 80.114 80 71.28 80h-43c-2.21 0-4-1.797-4-3.994z"></svg:path>`,
})
export class FadPunchInIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
