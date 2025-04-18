import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineFlipCameraIosIcon],svg[ic-baseline-flip-camera-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-8 13c-2.76 0-5-2.24-5-5H5l2.5-2.5L10 13H8c0 2.21 1.79 4 4 4c.58 0 1.13-.13 1.62-.35l.74.74c-.71.37-1.5.61-2.36.61m4.5-2.5L14 13h2c0-2.21-1.79-4-4-4c-.58 0-1.13.13-1.62.35l-.74-.73C10.35 8.24 11.14 8 12 8c2.76 0 5 2.24 5 5h2z"></svg:path>`,
})
export class IcBaselineFlipCameraIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
