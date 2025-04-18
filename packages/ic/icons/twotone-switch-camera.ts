import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSwitchCameraIcon],svg[ic-twotone-switch-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.12 4H9.88L8.05 6H4v12h16V6h-4.05zM15 15.5V13H9v2.5L5.5 12L9 8.5V11h6V8.5l3.5 3.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zm-5-7H9V8.5L5.5 12L9 15.5V13h6v2.5l3.5-3.5L15 8.5z"></svg:path>`,
})
export class IcTwotoneSwitchCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
