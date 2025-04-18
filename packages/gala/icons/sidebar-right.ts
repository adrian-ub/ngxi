import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaSidebarRightIcon],svg[gala-sidebar-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="m 16,64 224.93778,0.09256"></svg:path><svg:path d="M 48,16 H 207.91114 C 225.62929,16 240,30.281849 240,48 v 160 c 0,17.71816 -14.28185,32 -32,32 H 48 C 30.281848,240 16.069099,225.73073 16.06221,208.01257 L 16,48 C 15.993112,30.281851 30.281848,16 48,16 Z"></svg:path><svg:path d="M 160,64 V 240"></svg:path></svg:g>`,
})
export class GalaSidebarRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
