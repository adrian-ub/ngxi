import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilWatchIcon],svg[cil-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M349.279 16H162.721l-24.772 132.116a159.7 159.7 0 0 0 0 215.768L162.721 496h186.558l24.772-132.116a159.7 159.7 0 0 0 0-215.768Zm-160 32h133.442l13 69.311a159.75 159.75 0 0 0-159.434 0Zm133.442 416H189.279l-13-69.311a159.75 159.75 0 0 0 159.434 0ZM256 384a128 128 0 1 1 128-128a128.145 128.145 0 0 1-128 128"></svg:path>`,
})
export class CilWatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
