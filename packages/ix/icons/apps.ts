import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAppsIcon],svg[ix-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 96c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32m160 0c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32M128 416c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32m160 0c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32M128 256c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32m160 0c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32M448 96c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32m0 320c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32m0-160c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32"></svg:path>`,
})
export class IxAppsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
