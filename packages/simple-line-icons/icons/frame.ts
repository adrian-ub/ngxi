import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsFrameIcon],svg[simple-line-icons-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 112H32c-17.664 0-32 14.336-32 32v192c0 17.664 14.336 32 32 32s32-14.336 32-32V176h160c17.664 0 32-14.336 32-32s-14.336-32-32-32m768 544c-17.664 0-32 14.336-32 32v160H800c-17.664 0-32 14.336-32 32s14.336 32 32 32h192c17.664 0 32-14.336 32-32V688c0-17.664-14.336-32-32-32M224 848H64V688c0-17.664-14.336-32-32-32S0 670.336 0 688v192c0 17.664 14.336 32 32 32h192c17.664 0 32-14.336 32-32s-14.336-32-32-32m768-736H800c-17.664 0-32 14.336-32 32s14.336 32 32 32h160v160c0 17.664 14.336 32 32 32s32-14.336 32-32V144c0-17.664-14.336-32-32-32"></svg:path>`,
})
export class SimpleLineIconsFrameIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
