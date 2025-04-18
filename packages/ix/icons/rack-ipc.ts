import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRackIpcIcon],svg[ix-rack-ipc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 149.333v213.334H42.667V149.333zM106.667 192H85.333v128h21.334zm64 0h-21.334v128h21.334zm64 0h-21.334v128h21.334zm192 0H320v128h106.667z"></svg:path>`,
})
export class IxRackIpcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
