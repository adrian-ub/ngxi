import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMobileLandscapeIcon],svg[cil-mobile-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 96H48a32.036 32.036 0 0 0-32 32v256a32.036 32.036 0 0 0 32 32h416a32.036 32.036 0 0 0 32-32V128a32.036 32.036 0 0 0-32-32M48 384V128h48v256.018H48Zm80-256h256v256l-256 .013Zm336 256h-48V128h48Z"></svg:path>`,
})
export class CilMobileLandscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
