import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBoxIpcIcon],svg[ix-box-ipc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 106.667v298.666H42.666V106.667zM128 149.333H85.333v213.334H128zm170.667 0h-21.334v213.334h21.334zm64 0h-21.334v213.334h21.334zm64 0h-21.334v213.334h21.334zm-192 0h-21.334v213.334h21.334z"></svg:path>`,
})
export class IxBoxIpcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
