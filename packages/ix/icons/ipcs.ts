import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixIpcsIcon],svg[ix-ipcs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 213.333v213.334H170.667V213.333zm-192 42.667h-64v128h64zm85.334 0H320v128h42.667zm64 0H384v128h42.667zm-21.334-106.667V192h-256v170.667h-42.666V149.333zm-64-64V128h-256v170.667H42.667V85.333z"></svg:path>`,
})
export class IxIpcsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
